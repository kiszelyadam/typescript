import { First } from "./first";

export class Second extends First {

    constructor() {
        super('Teszt', 'Név');
    }

    asd: string = this.firstName;
    asd2: string = this.lastName;


    override testFunction(): void {
        console.log('IDE2');
    }
}