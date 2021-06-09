import { ICommand } from "../../types";

const skills: ICommand = {
    description: "Show my skills",
    execute: async () => {
        const lines: Array<string> = [
            "{#C778C1}* Frontend:{/#C778C1}",
            "  - Languages: JavaScript / TypeScript",
            "  - Frameworks: React with Redux",
            "  - Styling: Sass / Css / MaterialUI / Bootstrap",
            "",
            "{#C778C1}* Backend:{/#C778C1}",
            "  - Languages: Python / JavaScript / TypeScript",
            "  - Frameworks: FastAPI / NodeJS",
            "",
            "{#C778C1}* General:{/#C778C1}",
            "  - Git / Github",
            "  - TDD / Domain Driven Design",
            "  - Agile Method",
            "  - Figma / Illustrator",
            "  - Github Actions",
            "",
            "{#C778C1}* Other:{/#C778C1}",
            "  - Discord.JS ( {link}https://discord.js.org/{/link} )",
        ];

        return lines.join("\n");
    },
    name: "skills",
};

export default skills;
