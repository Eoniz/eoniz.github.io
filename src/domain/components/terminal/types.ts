export type Kind = "string" | "img" | "gif";

export type ICommandResult = string | {
    kind: Kind;
    content: string;
};

export interface IStdLine {
    content: string;
    isEcho: boolean;
    kind: Kind;
}

export interface ICommandUtils {
    stdOut: Array<IStdLine>;
    setStdout: (nextValue: Array<IStdLine>) => void;
    pushToStd: (command: string | undefined, result: ICommandResult) => void;
};

export interface ICommand {
    name: string;
    description: string;
    hidden?: boolean;
    execute: (
        args: string[],
        kwargs: Record<string, string>,
        utils: ICommandUtils
    ) => Promise<ICommandResult | null>;
};

export const LINK_DETECTION_REGEX = /(https?:\/\/[^\s]+)/g;