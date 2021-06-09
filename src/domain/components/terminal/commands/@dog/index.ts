import { ICommand } from "../../types";

const r = () => {
    return 200 + Math.floor(Math.random() * 1000);
}

const dog: ICommand = {
    name: "dog",
    description: "Print a dog 🐕",
    hidden: true,
    execute: async (args, kwargs, { pushToStd }) => {
        return {
            content: `https://placedog.net/${r()}/${r()}?random`,
            kind: "clear-img"
        }
    },
};

export default dog;
