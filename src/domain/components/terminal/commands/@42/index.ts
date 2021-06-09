import { ICommand } from "../../types";
import Gol from './gol';

const clamp = (a: number, min: number, max: number) => {
    if (a < min) {
        return min;
    }

    if (a > max) {
        return max;
    }

    return a;
}


const descriptionLines: Array<string> = [
    "You found the Game of life 🧬. You have these following options available:",
    "   {#FFCB6B}--iterations{/#FFCB6B} {#C778C1}{number}{/#C778C1}: Set the number of iterations {#79DDD9}(default to 10){/#79DDD9}.",
    "   {#FFCB6B}--width{/#FFCB6B} {#C778C1}{number}{/#C778C1}: Grid width (columns) {#79DDD9}(default to 30){/#79DDD9}.",
    "   {#FFCB6B}--height{/#FFCB6B} {#C778C1}{number}{/#C778C1}: Grid height (rows) {#79DDD9}(default to 10){/#79DDD9}.",
    "   {#FFCB6B}--delay{/#FFCB6B} {#C778C1}{number}{/#C778C1}: Delay between each iterations in ms {#79DDD9}(default to 1000){/#79DDD9}.",
    "   ",
    "   {#79DDD9}ex:{/#79DDD9} {#7dcc85}~${/#7dcc85} 42",
    "   {#79DDD9}ex:{/#79DDD9} {#7dcc85}~${/#7dcc85} 42 --width 10 --height 10",
    "   {#79DDD9}ex:{/#79DDD9} {#7dcc85}~${/#7dcc85} 42 --iterations 1 --delay 500",
]

const fortyTwo: ICommand = {
    description: descriptionLines.join("\n"),
    hidden: true,
    execute: async (args, kwargs, { pushToStd }) => {
        let iterations = 10;
        let width = 30;
        let height = 10;
        let delay = 1000;

        if (kwargs["iterations"]) {
            try {
                iterations = clamp(parseInt(kwargs["iterations"], 10), 1, 100);
            } catch (e) { console.error(e) };
        }

        if (kwargs["width"]) {
            try {
                width = clamp(parseInt(kwargs["width"], 10), 1, 50);
            } catch (e) { console.error(e) };
        }

        if (kwargs["height"]) {
            try {
                height = clamp(parseInt(kwargs["height"], 10), 1, 30);
            } catch (e) { console.error(e) };
        }

        if (kwargs["delay"]) {
            try {
                delay = clamp(parseInt(kwargs["delay"], 10), 500, 2000);
            } catch (e) { console.error(e) };
        }

        const gol = new Gol(width, height);
        let iteration = 0;
        const run = () => {
            setTimeout(() => {
                if (iteration >= iterations) {
                    return;
                }

                gol.evolve();
                const a = gol.toString();
                const counter = ` ${iteration + 1} / ${iterations} `;
                const numberOfStars = Math.round(width / 2) - Math.round(counter.length / 2);
                const head = `${"*".repeat(numberOfStars)}${counter}${"*".repeat(numberOfStars)}\n`;
                pushToStd(undefined, {
                    content: `${head}${a}`,
                    kind: "string"
                });
                run();
                iteration += 1;
            }, delay);
        };

        run();

        return "👀";
    },
    name: "42",
};

export default fortyTwo;
