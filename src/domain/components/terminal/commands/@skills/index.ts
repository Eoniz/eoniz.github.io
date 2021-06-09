import { ICommand } from "../../types";

const skills: ICommand = {
    description: "Show my skills",
    execute: async () => {
        const lines: Array<string> = [
            "{#79DDD9}Frontend{/#79DDD9}",
            "  - Languages: {#FFCB6B}JavaScript{/#FFCB6B} / {#FFCB6B}TypeScript{/#FFCB6B}",
            "  - Frameworks: {#FFCB6B}React{/#FFCB6B} / {#FFCB6B}Redux{/#FFCB6B}",
            "  - Styling: {#FFCB6B}Sass{/#FFCB6B} / {#FFCB6B}Css{/#FFCB6B} / {#FFCB6B}MaterialUI{/#FFCB6B} / {#FFCB6B}Bootstrap{/#FFCB6B}",
            "",
            "{#79DDD9}Backend{/#79DDD9}",
            "  - Languages: {#FFCB6B}Python{/#FFCB6B} / {#FFCB6B}JavaScript{/#FFCB6B} / {#FFCB6B}TypeScript{/#FFCB6B}",
            "  - Frameworks: {#FFCB6B}FastAPI{/#FFCB6B} / {#FFCB6B}NodeJS{/#FFCB6B}",
            "",
            "{#79DDD9}General{/#79DDD9}",
            "  - {#FFCB6B}Git{/#FFCB6B} / {#FFCB6B}Github{/#FFCB6B}",
            "  - {#FFCB6B}TDD{/#FFCB6B} / {#FFCB6B}Domain Driven Design{/#FFCB6B}",
            "  - {#FFCB6B}Agile Method{/#FFCB6B}",
            "  - {#FFCB6B}Figma{/#FFCB6B} / {#FFCB6B}Illustrator{/#FFCB6B}",
            "  - {#FFCB6B}Github Actions{/#FFCB6B}",
            "",
            "{#79DDD9}Other{/#79DDD9}",
            "  - {#FFCB6B}Discord.JS{/#FFCB6B} ( {link}https://discord.js.org/{/link} )",
        ];

        return lines.join("\n");
    },
    name: "skills",
};

export default skills;
