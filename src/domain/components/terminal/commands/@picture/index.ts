import { ICommand } from "../../types";

const picture: ICommand = {
    description: "Show my head :)",
    execute: async (args, kwargs, { pushToStd }) => {
        setTimeout(() => {
            pushToStd(undefined, {
                content: "🤡 Sorry for the troll 🤡",
                kind: "string"
            });
        }, 1000);
        return {
            content: "https://media-exp1.licdn.com/dms/image/C4D03AQF9UWWRM8bNJg/profile-displayphoto-shrink_200_200/0/1570990655948?e=1628726400&v=beta&t=Hbdy2WCN8lhNWJTCy-lOdfdSEuXncKYpjskVzFPI-ps",
            kind: "img"
        }
    },
    name: "picture",
};

export default picture;
