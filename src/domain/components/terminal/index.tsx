import React, { useRef, useState } from 'react'
import { ICommand, ICommandResult, IStdLine } from './types';
import { limitArray } from '../../../utils/array/limited_array';

// @ts-ignore
import minimist from "minimist-string";
import { ImagePixelated } from "react-pixelate"
import regexifyString from 'regexify-string';

interface IProps {
    promptLabel?: string;
    commands?: Record<string, ICommand>;
    welcomeMessage?: string;
}

const MAX_STD = 50;
const MAX_HISTORY_SIZE = 10;

const Terminal = (props: IProps) => {
    const rootRef = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [stdout, setStdout] = useState<Array<IStdLine>>([]);
    const [commandHistory, setCommandHistory] = useState<Array<string>>([""]);
    const [commandHistoryIdx, setCommandHistoryIdx] = useState<number>(0);
    
    const promptLabel = React.useMemo<string>(() => {
        return props.promptLabel || '$';
    }, [props.promptLabel]);

    React.useEffect(() => {
        setStdout((s: Array<IStdLine>) => {
            if (!props.welcomeMessage) {
                return s;
            }

            const nextStdout: Array<IStdLine> = [
                ...s,
                {
                    kind: "string",
                    content: props.welcomeMessage,
                    isEcho: false
                }
            ];
            return nextStdout;
        });
    }, [props.welcomeMessage]);

    React.useEffect(() => {
        const div = document.getElementById("terminal-content");
        if (div) {
            div.scrollTop = div.scrollHeight - div.clientHeight;
        }
    }, [stdout]);

    const pushToStd = (command: string | undefined, result: ICommandResult) => {
        const handledCommandResponse = handleCommandResponse(result);
        
        if (!command) {
            setStdout((last) => limitArray([
                ...last,
                handledCommandResponse
            ], MAX_STD));

            return;
        }

        setStdout((last) => limitArray([
            ...last,
            {
                content: command,
                isEcho: true,
                kind: "string"
            },
            handledCommandResponse
        ], MAX_STD));
    };

    const handleCommandResponse = (result: ICommandResult): IStdLine => {
        if (typeof(result) === "string") {
            return {
                content: result,
                isEcho: false,
                kind: "string"
            }
        }

        return {
            content: result.content,
            kind: result.kind,
            isEcho: false,
        }
    }

    const handleInput = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!inputRef.current) {
            return;
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();

            const next = (commandHistoryIdx + 1 >= commandHistory.length) ? commandHistory.length - 1 : commandHistoryIdx + 1;
            inputRef.current.value = commandHistory[next];
            setCommandHistoryIdx(next);

            return;
        }

        if (e.key === "ArrowDown") {
            e.preventDefault();

            const next = (commandHistoryIdx - 1 < 0) ? 0 : commandHistoryIdx - 1;
            inputRef.current.value = commandHistory[next];
            setCommandHistoryIdx(next);

            return;
        }

        if (e.key === "Enter") {
            e.preventDefault();
            
            const cmdString = inputRef.current.value;
            const { _: args, ...kwargs } = minimist(inputRef.current.value);

            setCommandHistory((last) => {
                return limitArray([
                    "",
                    cmdString,
                    ...last.slice(1)
                ].reverse(), MAX_HISTORY_SIZE).reverse()
            });
            setCommandHistoryIdx(0);

            if (props.commands) {
                if (args[0] in props.commands) {
                    const command = props.commands[args[0]];

                    const result = await command.execute(
                        args, 
                        kwargs,
                        {
                            stdOut: stdout,
                            setStdout: setStdout,
                            pushToStd: pushToStd
                        }
                    );

                    if (result) {
                        pushToStd(inputRef.current.value, result);
                    }
                } else {
                    pushToStd(inputRef.current.value, `command "${args[0]}" does not exist.`);
                }
            }


            inputRef.current.value = "";

            return;
        }
    };

    const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextHistory = [...commandHistory];
        nextHistory[0] = e.target.value;
        setCommandHistory(limitArray(nextHistory.reverse(), MAX_HISTORY_SIZE).reverse());
    };

    const renderContent = (content: string) => {
        const COLORS_REG = /{(.*?)}(.*?){\/(.*?)}/g;
        const nextContent = regexifyString({
            pattern: COLORS_REG,
            decorator: (match, index) => {
                const m = match.split(COLORS_REG).filter(v => v !== "");
                if (m[0] === "link") {
                    return (
                        <a 
                            href={m[1]}
                            target="_blank"
                            rel="noreferrer"
                        >
                            { m[1] }
                        </a>
                    );
                }

                return <span style={{ color: m[0] }}>{m[1]}</span>;
            },
            input: content
        });
        
        return <span>{nextContent}</span>;
    };

    const getStdout = () => {
        return stdout.map((line, id) => {
            if (line.isEcho) {
                return (
                    <div key={id} className="line">
                        <span
                            className="prompt-label"
                        >
                            { promptLabel }
                        </span>
                        {
                            line.content
                        }
                    </div>
                )
            }

            if (line.kind === "img") {
                return (
                    <div key={id} className="line">
                        <ImagePixelated
                            src={line.content} 
                            width={200}
                            height={200}
                            centered
                            pixelSize={4}
                        />
                    </div>
                )
            }

            return (
                <React.Fragment key={id}>
                    {
                        line.content
                            .split('\n')
                            .map((c, id2) => (
                                <div key={`${id}-${id2}`} className="line">
                                    { renderContent(c) }
                                </div>
                            ))
                    }
                </React.Fragment>
            )
        });
    }
    
    return (
        <div
            ref={rootRef}
            className="terminal"
        >
            <div
                className="content"
                id="terminal-content"
            >
                {getStdout()}
                <div
                    className="input-area"
                >
                    <span
                        className={"prompt-label"}
                    >
                        { promptLabel }
                    </span>
                    <input
                        ref={inputRef}
                        name='terminal-input'
                        className="terminal-input"
                        onChange={handleInputChanged}
                        onKeyDown={handleInput}
                        type='text'
                        autoComplete="off"
                        spellCheck={false}
                        autoCapitalize={"off"}
                    />
                </div>
            </div>
        </div>
    )
};

export default Terminal;
