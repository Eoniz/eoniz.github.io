import { ICommand } from "../../types";

const contact: ICommand = {
    description: "Show my contact",
    execute: async (args, kwargs, stdout, setStdout) => {
        const lines: Array<string> = [
            "{#C778C1}* Name:{/#C778C1} ARTISIEN Nathan",
            "{#C778C1}* E-Mail:{/#C778C1} nathan.artisien@gmail.com",
            "{#C778C1}* Phone:{/#C778C1} (+33) 06.47.48.02.85",
            "{#C778C1}* LinkedIn:{/#C778C1} {link}https://www.linkedin.com/in/nathan-artisien/{/link}",
            "{#C778C1}* Github:{/#C778C1} {link}https://github.com/Eoniz/{/link}",
            "{#C778C1}* Website:{/#C778C1} {link}https://nathan-artisien.me/{/link}",
        ];

        return lines.join("\n");
    },
    name: "contact",
};

export default contact;
