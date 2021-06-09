import { ICommand } from "../../types";

const cls: ICommand = {
    description: "Clear the screen",
    execute: async (args, kwargs, { setStdout }) => {
        setStdout([]);
        return null;
    },
    name: "cls",
};

export default cls;
