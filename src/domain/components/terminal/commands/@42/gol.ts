const wrap = (pos: number, max: number) => {
    let norm = pos;

    if (pos < 0) {
        norm = max + pos;
    } else if (pos > max - 1) {
        norm = pos - norm;
    }
    return norm;
};

const randomBinary = () => {
    return Math.floor(Math.random() + 0.2);
};


class Gol {

    current: Array<Array<number>>;
    x: number;
    y: number;
    cordMask: Array<{x: number, y: number}>;

    constructor(x: number, y: number) {
        this.current = this.createMatrix(x, y);
        this.x = x;
        this.y = y;
        this.cordMask = [
            {x: -1, y: -1},
            {x: -1, y: 0},
            {x: -1, y: 1},
            {x: 0, y: -1},
            {x: 0, y: 1},
            {x: 1, y: -1},
            {x: 1, y: 0},
            {x: 1, y: 1},
        ];
    }

    createMatrix(width: number, height: number) {
        return Array.from({ length: height }, () => new Array(width).fill(0)).map(row => row.map(() => randomBinary()));
    }
    
    add(cordA: { x: number, y: number }, cordB: { x: number, y: number }) {
        return {
            x: wrap(cordA.x + cordB.x, this.x),
            y: wrap(cordA.y + cordB.y, this.y)
        };
    }

    isAlive(cord: { x: number, y: number }) {
        return this.current[cord.y][cord.x];
    }

    numberOfLivingNeighbours(cord: { x: number, y: number }) {
        return this.cordMask.reduce((total, mask) => total + this.isAlive(this.add(mask, cord)), 0);
    }

    newState(cord: { x: number, y: number }) {
        const neighbours = this.numberOfLivingNeighbours(cord);
        return this.isAlive(cord)
            ? neighbours > 3 || neighbours < 2 ? 0 : 1
            : neighbours != 3 ? 0 : 1; 
    }
    evolve() {
        this.current = this.current.map((column, y) => column.map((cell, x)=> this.newState({x: x, y: y})));
    }

    toString() {
        return this.current.reduce((total, row) => total + row.join('').replace(/0/g, '{cyan}.{/cyan}').replace(/1/g, '{#FFCB6B}*{/#FFCB6B}') + '\n', '');
    }
}

export default Gol;