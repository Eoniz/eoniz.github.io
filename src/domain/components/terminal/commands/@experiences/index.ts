import { ICommand } from "../../types";

const experiences: ICommand = {
    description: "Show my experiences",
    execute: async () => {
        const lines: Array<string> = [
            "{#79DDD9}Orness{/#79DDD9} - {#C778C1}Paris, France{/#C778C1} (March 2019 -> Today)",
            "  - Engineer",
            "  - Lead FrontEnd engineer on {#e6d9f8}Dojo{/#e6d9f8}{#b1518e}.Codes{/#b1518e}. A website used to create code fest, and let users practice on programming exercises",
            "  - Worked on {link}https://dojo.codes{/link} v1 as FrontEnd Developer. Orness organized a dev event on this website with ~{#79DDD9}150{/#79DDD9} participants at the same time, and ~{#79DDD9}200{/#79DDD9} registered.",
            "  - Working on {link}https://dojo.codes{/link} v2 as FrontEnd Developer",
            "",
            "{#79DDD9}Société Générale{/#79DDD9} - {#C778C1}La Défense Puteaux, France{/#C778C1} (March 2019 -> Today)",
            "  - FullStack Developer",
            "  - Created multiple APIs",
            "    - Languages: {#FFCB6B}Python{/#FFCB6B}",
            "    - Frameworks: {#FFCB6B}FastAPI{/#FFCB6B}, {#FFCB6B}Flask{/#FFCB6B}",
            "  - Created multiple FrontEnds",
            "    - Languages: {#FFCB6B}TypeScript{/#FFCB6B}, {#FFCB6B}JavaScript{/#FFCB6B}",
            "    - Frameworks: {#FFCB6B}React{/#FFCB6B}, {#FFCB6B}Redux{/#FFCB6B}",
            "  - Supports (legacy {#FFCB6B}VBA{/#FFCB6B} projects and ours)",
            "  - Devops (CI/CD with {#FFCB6B}Jenkins{/#FFCB6B}, {#FFCB6B}Kube{/#FFCB6B}, {#FFCB6B}GitHub{/#FFCB6B})",
            "  - Agile Methodology",
            "",
            "{#79DDD9}Side Projects{/#79DDD9}",
            "  - All my side projects are in my github: {link}https://github.com/Eoniz/{/link}"
        ];

        return lines.join("\n");
    },
    name: "experiences",
};

export default experiences;
