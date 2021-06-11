import { ICommand } from "../../types";
import FortyTwoManager from '../utils/forty_two_manager';

const clamp = (a: number, min: number, max: number) => {
    if (a < min) {
        return min;
    }

    if (a > max) {
        return max;
    }

    return a;
}

const MIN_WIDTH = 1;
const MIN_HEIGHT = 1;
const MIN_DELAY = 50;
const MIN_ITERATIONS = 1;

const MAX_WIDTH = 50;
const MAX_HEIGHT = 50;
const MAX_DELAY = 2000;
const MAX_ITERATIONS = 200;

const DEFAULT_WIDTH = 30;
const DEFAULT_ITERATIONS = 10;
const DEFAULT_HEIGHT = 10;
const DEFAULT_DELAY = 1000;

const descriptionLines: Array<string> = [
    "You found the Game of life 🧬. You have these following options available:",
    `   {#FFCB6B}--iterations{/#FFCB6B} {#C778C1}{number}{/#C778C1}: Set the number of iterations {#79DDD9}(default to ${DEFAULT_WIDTH}){/#79DDD9}.`,
    `   {#FFCB6B}--width{/#FFCB6B} {#C778C1}{number}{/#C778C1}: Grid width (columns) {#79DDD9}(default to ${DEFAULT_WIDTH}){/#79DDD9}.`,
    `   {#FFCB6B}--height{/#FFCB6B} {#C778C1}{number}{/#C778C1}: Grid height (rows) {#79DDD9}(default to ${DEFAULT_HEIGHT}){/#79DDD9}.`,
    `   {#FFCB6B}--delay{/#FFCB6B} {#C778C1}{number}{/#C778C1}: Delay between each iterations in ms {#79DDD9}(default to ${DEFAULT_DELAY}){/#79DDD9}.`,
    "   ",
    "   {#79DDD9}ex:{/#79DDD9} {#7dcc85}~$ {/#7dcc85} 42",
    "   {#79DDD9}ex:{/#79DDD9} {#7dcc85}~$ {/#7dcc85} 42 --width 10 --height 10",
    "   {#79DDD9}ex:{/#79DDD9} {#7dcc85}~$ {/#7dcc85} 42 --iterations 1 --delay 500",
]

const fortyTwo: ICommand = {
    description: descriptionLines.join("\n"),
    hidden: true,
    execute: async (args, kwargs, { pushToStd }) => {
        if (args.length === 2) {
            if (args[1] === "stop") {
                FortyTwoManager.getInstance().stop();

                return "Done ✅"
            }

            return "Invalid command. Type {#FFCB6B}help 42{/#FFCB6B}";
        }
        let iterations = DEFAULT_ITERATIONS;
        let width = DEFAULT_WIDTH;
        let height = DEFAULT_HEIGHT;
        let delay = DEFAULT_DELAY;

        if (kwargs["iterations"]) {
            try {
                iterations = clamp(parseInt(kwargs["iterations"], 10), MIN_ITERATIONS, MAX_ITERATIONS);
            } catch (e) { console.error(e) };
        }

        if (kwargs["width"]) {
            try {
                width = clamp(parseInt(kwargs["width"], 10), MIN_WIDTH, MAX_WIDTH);
            } catch (e) { console.error(e) };
        }

        if (kwargs["height"]) {
            try {
                height = clamp(parseInt(kwargs["height"], 10), MIN_HEIGHT, MAX_HEIGHT);
            } catch (e) { console.error(e) };
        }

        if (kwargs["delay"]) {
            try {
                delay = clamp(parseInt(kwargs["delay"], 10), MIN_DELAY, MAX_DELAY);
            } catch (e) { console.error(e) };
        }

        FortyTwoManager.getInstance().reset({
            delay: delay,
            width: width,
            height: height,
            nbIterations: iterations
        });

        FortyTwoManager.getInstance().run(pushToStd);

        return "⚠️ Type {#FFCB6B}42 stop{/#FFCB6B} if you want to stop at any moment ⚠️";
    },
    name: "42",
};

export default fortyTwo;
