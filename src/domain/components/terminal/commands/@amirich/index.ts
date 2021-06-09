import { ICommand } from "../../types";

const amirich: ICommand = {
    name: "amirich",
    description: "📈 Am I Rich ? 📈",
    execute: async (args, kwargs, { pushToStd }) => {
        setTimeout(() => {
            pushToStd(undefined, {
                kind: "string",
                content: "nop i'm not 📉😭"
            });
        }, 100)

        return {
            content: `${process.env.PUBLIC_URL}/img/notstonks.gif`,
            kind: "gif",
            meta: {
                width: 220,
                height: 130
            }
        };
    },
};

export default amirich;
