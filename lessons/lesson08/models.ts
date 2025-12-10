
export const PI: number = 3.14;
function calculateCircumference(diameter: number): number {
    return PI * diameter;
}
export function calculateArea(radius: number): number {
    return PI * radius * radius;
}

export class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }
    public getCoordinates(): string {
        return `(${this.x}, ${this.y})`;
    }
    public setCoordinates(x: number, y: number): void {
        this._x = x;
        this._y = y;
    }
    get x(): number {
        return this.x;
    }
    get y(): number {
        return this.y;
    }
}

class Line {
    private start: Point;
    private end: Point;
    constructor(start: Point, end: Point) {
        this.start = start;
        this.end = end;
    }
    public getLength(): number {
        const dx = this.end.x - this.start.x;
        const dy = this.end.y - this.start.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    public setPoints(start: Point, end: Point): void {
        this.start = start;
        this.end = end;
    }
}

export {Line, calculateCircumference};
export default PI;