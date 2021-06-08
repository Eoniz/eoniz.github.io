import { ICommand } from "../../types";

import commands from '../commands';

const help: ICommand = {
    description: "Show this message",
    execute: async (args, kwargs, stdout, setStdout) => {
        const maxSize = Object.values(commands)
            .map(cmd => cmd.name)
            .sort((a, b) => b.length - a.length)[0].length;
        
        return Object.values(commands)
            .map(cmd => `${cmd.name}${" ".repeat(maxSize - cmd.name.length)} - ${cmd.description}`)
            .join('\n');
    },
    name: "help",
};

export default help;
