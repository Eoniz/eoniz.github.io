import React, { useRef, useState } from 'react'
import { ICommand, ICommandResult, IStdLine, LINK_DETECTION_REGEX } from './types';

// @ts-ignore
import minimist from "minimist-string";
import { ImagePixelated } from "react-pixelate"

interface IProps {
    promptLabel?: string;
    commands?: Record<string, ICommand>;
    welcomeMessage?: string;
}

const Terminal = (props: IProps) => {
    const rootRef = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [stdout, setStdout] = useState<Array<IStdLine>>([]);
    
    const promptLabel = React.useMemo<string>(() => {
        return props.promptLabel || '$';
    }, [props.promptLabel]);

    React.useEffect(() => {
        if (props.welcomeMessage) {
            setStdout([
                ...stdout,
                {
                    kind: "string",
                    content: props.welcomeMessage,
                    isEcho: false
                }
            ]);
        }
    }, [props.welcomeMessage]);

    React.useEffect(() => {
        const div = document.getElementById("terminal-content");
        if (div) {
            div.scrollTop = div.scrollHeight - div.clientHeight;
        }
    }, [stdout]);

    const pushToStd = (command: string, result: ICommandResult) => {
        const handledCommandResponse = handleCommandResponse(result);
        
        setStdout([
            ...stdout,
            {
                content: command,
                isEcho: true,
                kind: "string"
            },
            handledCommandResponse
        ]);
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

    const handleInput = async (e: React.KeyboardEvent) => {
        if (!inputRef.current) {
            return;
        }

        if (e.key === "Enter") {
            e.preventDefault();
            
            const { _: args, ...kwargs } = minimist(inputRef.current.value);

            if (props.commands) {
                if (args[0] in props.commands) {
                    const command = props.commands[args[0]];
                    const result = await command.execute(
                        args, 
                        kwargs, 
                        stdout,
                        setStdout
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

    const renderContent = (content: string) => {
        const nextContent = content
            .split(" ")
            .map((part, idx) => {
                return LINK_DETECTION_REGEX.test(part)
                    ? (
                        <a
                            key={idx} 
                            href={part} 
                            target="_blank"
                            rel="noreferrer"
                        >
                            {part}
                        </a>
                    ) 
                    : part + " "
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
                            pixelSize={10}
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
                        onKeyDown={handleInput}
                        type='text'
                        autoComplete='off'
                    />
                </div>
            </div>
        </div>
    )
};

export default Terminal;