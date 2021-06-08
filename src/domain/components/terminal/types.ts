export type Kind = "string" | "img";

export type ICommandResult = string | {
    kind: Kind;
    content: string;
};

export interface IStdLine {
    content: string;
    isEcho: boolean;
    kind: Kind;
}

export interface ICommand {
    name: string;
    description: string;
    execute: (
        args: string[],
        kwargs: Record<string, string>,
        stdOut: Array<IStdLine>,
        setStdout: (nextValue: Array<IStdLine>) => void
    ) => Promise<ICommandResult | null>;
};

export const LINK_DETECTION_REGEX = /(https?:\/\/[^\s]+)/g;