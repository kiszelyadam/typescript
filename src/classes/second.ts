import { First } from "./first";
import { ThirdClass } from "./third";

export class Second extends ThirdClass  {

    /* constructor() {
        super('Teszt', 'Név');
    }

    asd: string = this.firstName;
    asd2: string = this.lastName;


    override testFunction(): void {
        console.log('IDE2');
    } */

    override thirdClassFunction(): void {
        console.log('implemented third class');
    }
}