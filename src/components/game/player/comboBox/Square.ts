export default class Square {
    id: number;
    color: string;
    selected: boolean;

    constructor(id: number, color: string) {
        this.id = id;
        this.color = color;
        this.selected = false;
    }

    setColor(color: string) {
        this.color = color;
    }

    selectThis(value: boolean) {
        this.selected = value;
    }
}
