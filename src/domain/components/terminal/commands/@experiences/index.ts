import { ICommand } from "../../types";

const experiences: ICommand = {
    description: "Show my experiences",
    execute: async (args, kwargs, stdout, setStdout) => {
        const lines: Array<string> = [
            "* Orness (March 2019 -> Today):",
            "  - I was a consultant for Société Générale",
            "  - I worked on https://dojo.codes (v1) as frontend dev, and actually working on v2. Orness organized a dev event on this website with ~150 participants at the same time (more info here: https://www.linkedin.com/feed/update/urn:li:activity:6793112284517437441/ )",
            "",
            "* Société Générale (March 2019 -> Today):",
            "  - I was FullStack developer",
            "  - I Realized APIs using Python (3.6/3.7) and FastAPI",
            "  - I Realized Frontends using JavaScript/TypeScript and React ((Functionnal || Class) Components) with Redux",
            "  - Deployments using our deployment stack (CI/CD using Jenkins, docker and github)",
            "  - Supports on projects (ours, and also legacy projects in VBA)",
            "  - Our team worked using Agile Method",
            "",
            "* Side Projects:",
            "  - All my side projects are in my github: https://github.com/Eoniz/"
        ];

        return lines.join("\n");
    },
    name: "experiences",
};

export default experiences;
