import { ICommand } from "../../types";

const contact: ICommand = {
    description: "Show my contact",
    execute: async (args, kwargs, stdout, setStdout) => {
        const lines: Array<string> = [
            "* Name: ARTISIEN Nathan",
            "* E-Mail: nathan.artisien@gmail.com",
            "* Phone: (+33) 06.47.48.02.85",
            "* LinkedIn: https://www.linkedin.com/in/nathan-artisien/",
            "* Github: https://github.com/Eoniz/",
            "* Website: https://nathan-artisien.me/",
        ];

        return lines.join("\n");
    },
    name: "contact",
};

export default contact;
