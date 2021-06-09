import { ICommand } from "../../types";

const bio: ICommand = {
    description: "Show my bio",
    execute: async () => {
        const lines: Array<string> = [
            "Hello !",
            "My name is Nathan, and I am from {#C778C1}Paris, France{/#C778C1}.",
            "I'm currently working as a {#79DDD9}Full Stack Developer{/#79DDD9} at {#C778C1}Orness{/#C778C1} and {#C778C1}Société Générale{/#C778C1}.",
            "I have been working 3 years with {#79DDD9}Python{/#79DDD9}, {#79DDD9}FastAPI{/#79DDD9}, {#79DDD9}React{/#79DDD9}, {#79DDD9}Redux{/#79DDD9}, {#79DDD9}TypeScript{/#79DDD9} and {#79DDD9}JavaScript{/#79DDD9} with a focus on {#79DDD9}APIs{/#79DDD9} and {#79DDD9}FrontEnds{/#79DDD9}.",
            "I enjoy reading, learning new stuff and globally, the crypto world and the tech world :)",
            "Feel free to {#FFCB6B}contact{/#FFCB6B} me ! I will be glad to discuss with you !"
        ];

        return lines.join("\n");
    },
    name: "bio",
};

export default bio;
