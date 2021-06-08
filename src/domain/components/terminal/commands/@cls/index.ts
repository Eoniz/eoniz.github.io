import { ICommand } from "../../types";

const cls: ICommand = {
    description: "Clear the screen",
    execute: async (args, kwargs, stdout, setStdout) => {
        setStdout([]);
        return null;
    },
    name: "cls",
};

export default cls;
