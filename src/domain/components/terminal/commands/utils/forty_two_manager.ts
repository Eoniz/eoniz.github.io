import Gol from '../@42/gol';
import { ICommandResult } from '../../types';

interface IConstructor {
    width: number;
    height: number;
    nbIterations: number;
    delay: number;
}

class FortyTwoManager {
    private static instance: FortyTwoManager;

    width: number;
    height: number;
    nbIterations: number;
    delay: number;
    currentIteration: number;
    gol: Gol;
    currentTimeout: NodeJS.Timeout | null;
    
    constructor() {
        this.width = 0;
        this.height = 0;
        this.nbIterations = 0;
        this.delay = 0;
        this.currentIteration = 0;
        this.gol = new Gol(0, 0);
        this.currentTimeout = null;
    }

    public static getInstance() {
        if (!FortyTwoManager.instance) {
            FortyTwoManager.instance = new FortyTwoManager();
        }

        return FortyTwoManager.instance;
    }

    public reset(props: IConstructor) {
        this.width = props.width;
        this.height = props.height;
        this.delay = props.delay;
        this.nbIterations = props.nbIterations;
        this.currentIteration = 0;
        this.gol = new Gol(this.width, this.height);
    }

    public run(pushToStd: (command: string | undefined, result: ICommandResult) => void) {
        if (this.currentIteration >= this.nbIterations) {
            this.currentTimeout = null;
            return;
        }

        this.currentTimeout = setTimeout(() => {
            this.gol.evolve();
            const a = this.gol.toString();
            const counter = ` ${this.currentIteration + 1} / ${this.nbIterations} `;
            const numberOfStars = Math.round(this.width / 2) - Math.round(counter.length / 2);
            const head = `${"*".repeat(numberOfStars)}${counter}${"*".repeat(numberOfStars)}\n`;
            pushToStd(undefined, {
                content: `${head}${a}`,
                kind: "string"
            });
            this.run(pushToStd);
            this.currentIteration += 1;
        }, this.delay);
    }

    public stop() {
        if (this.currentTimeout !== null) {
            clearTimeout(this.currentTimeout);
        }
    }
}

export default FortyTwoManager;
