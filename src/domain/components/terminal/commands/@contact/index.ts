import { ICommand } from "../../types";

const contact: ICommand = {
    description: "Show my contact",
    execute: async () => {
        const lines: Array<string> = [
            "{#79DDD9}Name{/#79DDD9}: ARTISIEN Nathan",
            "{#79DDD9}Location{/#79DDD9}: {#C778C1}Paris, France{/#C778C1}",
            `{#79DDD9}Age{/#79DDD9}: ${new Date().getFullYear() - 1997} years old`,
            "{#79DDD9}E-Mail{/#79DDD9}: nathan.artisien@gmail.com",
            "{#79DDD9}Phone{/#79DDD9}: (+33) 06.47.48.02.85",
            "{#79DDD9}LinkedIn{/#79DDD9}: {link}https://www.linkedin.com/in/nathan-artisien/{/link}",
            "{#79DDD9}Github{/#79DDD9}: {link}https://github.com/Eoniz/{/link}",
            "{#79DDD9}Website{/#79DDD9}: {link}https://nathan-artisien.me/{/link}",
        ];

        return lines.join("\n");
    },
    name: "contact",
};

export default contact;
