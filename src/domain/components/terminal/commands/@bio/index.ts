import { ICommand } from "../../types";

const bio: ICommand = {
    description: "Show my bio",
    execute: async (args, kwargs, stdout, setStdout) => {
        const lines: Array<string> = [
            "Hello !",
            "My name is Nathan, and I am from {#C778C1}Paris, France{/#C778C1}.",
            "I'm currently working as a {#FFCB6B}Full stack Developer{/#FFCB6B} at {#C778C1}Orness and Société Générale{/#C778C1}.",
            "I have been working 2 years with {#FFCB6B}Python{/#FFCB6B}, {#FFCB6B}FastAPI{/#FFCB6B}, {#FFCB6B}React{/#FFCB6B}, {#FFCB6B}Redux{/#FFCB6B}, {#FFCB6B}TypeScript{/#FFCB6B} and {#FFCB6B}JavaScript{/#FFCB6B} with a focus on {#FFCB6B}APIs{/#FFCB6B} and {#FFCB6B}FrontEnds{/#FFCB6B}.",
            "I enjoy reading, learning new stuff and globally, the crypto world and the tech world :)",
            "Feel free to {#FFCB6B}contact me{/#FFCB6B} ! I will be glad to discuss with you !"
        ];

        return lines.join("\n");
    },
    name: "bio",
};

export default bio;
