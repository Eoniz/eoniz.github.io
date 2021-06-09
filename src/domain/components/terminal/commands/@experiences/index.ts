import { ICommand } from "../../types";

const experiences: ICommand = {
    description: "Show my experiences",
    execute: async (args, kwargs, stdout, setStdout) => {
        const lines: Array<string> = [
            "{#C778C1}* Orness (March 2019 -> Today):{/#C778C1}",
            "  - I was a consultant for Société Générale",
            "  - I worked on https://dojo.codes (v1) as frontend dev, and actually working on v2. Orness organized a dev event on this website with ~150 participants at the same time (more info here: https://www.linkedin.com/feed/update/urn:li:activity:6793112284517437441/ )",
            "",
            "{#C778C1}* Société Générale (March 2019 -> Today):{/#C778C1}",
            "  - I was FullStack developer",
            "  - I Realized APIs using {#FFCB6B}Python (3.6/3.7){/#FFCB6B} and {#FFCB6B}FastAPI{/#FFCB6B}",
            "  - I Realized Frontends using {#FFCB6B}JavaScript/TypeScript{/#FFCB6B} and {#FFCB6B}React{/#FFCB6B} ((Functionnal || Class) Components) with {#FFCB6B}Redux{/#FFCB6B}",
            "  - Deployments using our deployment stack (CI/CD using {#FFCB6B}Jenkins{/#FFCB6B}, {#FFCB6B}Docker{/#FFCB6B} and {#FFCB6B}Github{/#FFCB6B})",
            "  - Supports on projects (ours, and also legacy projects in {#FFCB6B}VBA{/#FFCB6B})",
            "  - Our team worked using Agile Method",
            "",
            "{#C778C1}* Side Projects:{/#C778C1}",
            "  - All my side projects are in my github: {link}https://github.com/Eoniz/{/link}"
        ];

        return lines.join("\n");
    },
    name: "experiences",
};

export default experiences;
