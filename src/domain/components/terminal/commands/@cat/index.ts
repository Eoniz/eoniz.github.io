import { ICommand } from "../../types";

const r = () => {
    return 200 + Math.floor(Math.random() * 1000);
}

const cat: ICommand = {
    name: "cat",
    description: "Print a cat 🐈",
    hidden: true,
    execute: async (args, kwargs, { pushToStd }) => {
        return {
            content: `https://placekitten.com/${r()}/${r()}`,
            kind: "clear-img"
        }
    },
};

export default cat;
