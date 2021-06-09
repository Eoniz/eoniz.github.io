import { ICommand } from "../../types";

import commands from '../commands';

const help: ICommand = {
    description: "Show this message. {#FFCB6B}help{/#FFCB6B} {#79DDD9}cmd{/#79DDD9} to get help for a specific command.",
    execute: async (args) => {
        if (args.length === 2) {
            if (commands[args[1]]) {
                const cmd = commands[args[1]];
                return `{#FFCB6B}${cmd.name}{/#FFCB6B} - ${cmd.description}`
            }
        }

        const maxSize = Object.values(commands)
            .filter(cmd => cmd.hidden === undefined || cmd.hidden === false)
            .map(cmd => cmd.name)
            .sort((a, b) => b.length - a.length)[0].length;
        
        return Object.values(commands)
            .filter(cmd => cmd.hidden === undefined || cmd.hidden === false)
            .map(cmd => `{#FFCB6B}${cmd.name}{/#FFCB6B}${" ".repeat(maxSize - cmd.name.length)} - ${cmd.description}`)
            .join('\n');
    },
    name: "help",
};

export default help;
