import { ICommand } from "../../types";

const skills: ICommand = {
    description: "Show my skills",
    execute: async (args, kwargs, stdout, setStdout) => {
        const lines: Array<string> = [
            "* Frontend:",
            "  - Languages: JavaScript / TypeScript",
            "  - Frameworks: React with Redux",
            "  - Styling: Sass / Css / MaterialUI / Bootstrap",
            "",
            "* Backend:",
            "  - Languages: Python / JavaScript / TypeScript",
            "  - Frameworks: FastAPI / NodeJS",
            "",
            "* General:",
            "  - Git / Github",
            "  - TDD / Domain Driven Design",
            "  - Agile Method",
            "  - Figma / Illustrator",
            "  - Github Actions",
            "",
            "* Other:",
            "  - Discord.JS ( https://discord.js.org/ )",
        ];

        return lines.join("\n");
    },
    name: "skills",
};

export default skills;
