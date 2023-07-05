import { Component, OnInit } from '@angular/core';
import { First } from 'src/classes/first';
import { Second } from 'src/classes/second';
import { TestType } from 'src/interfaces/test.defitions';

interface Test {
  firstName: string;
  lastName: string;
}

const ASD_ASD = 10;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'typescript-basic';

  testInterFaceValue: Test = {
     firstName: 'Asd',
     lastName: 'Asd'
  }

  variable?: number;

  anyType = this.testInterFaceValue;

  optChaining = {
    first: {
      second: []
    }
  }

  nullish?: number;

  myArray: number[] = [0, 1, 2, 3, 4, 5, 6];

  ourTuple?: [number, boolean, string];

  unionVariable?: string | number;

  howManyWheels?: Record<string, number>;

  omitType?: Omit<TestType, 'address'>;


  object = {
    test: 'Teszt'
  }

  number = 0;
  string = '0';

  ngOnInit(): void {
    console.log(this.optChaining?.first?.second);
    console.log(ASD_ASD);
    if (this.optChaining) {
      if (this.optChaining.first) {
        if (this.optChaining.first.second) {

        }
      }
    }

    this.nullish = this.variable ?? 100;
    this.nullish = this.variable ? this.variable : 100;

    this.myArray.push(7);

    const asd = this.myArray.map((element) => {
      return element += 1
    });
  
    console.log('FILTER',this.myArray.filter((element) => element > 3));

    console.log('FIND',this.myArray.find((element) => element === 4));

    console.log('REDUCE',this.myArray.reduce((prev, next) => {
      return prev + next;
    }))

    console.log('EVERY', this.myArray.every((element) => element > 0));

    console.log('INDEXOF', this.myArray.indexOf(4));

    console.log('FINDINDEX', this.myArray.findIndex((element) => element === 4));

    console.log('JOIN', this.myArray.join(' ,'));

    console.log('POP',this.myArray.pop());

    this.ourTuple = [10, false, 'string'];
    console.log(this.ourTuple);

    console.log(this.object);

    this.asd();

    console.log(this.object);

    this.unionVariable = 'string';


    let arrowfunctionresult = this.testArrowFunction('test');

    const myObject = {
      myMethod() {
        console.log(this); // logs myObject
        const callback = () => {
          console.log(this); // logs myObject
        };
      }
    };


  this.number = +this.string;

    console.log(arrowfunctionresult);


    const firstClass = new First('Kiszely', 'Ádám');

    firstClass.setfName = 'Gergely';

    const secondClass = new Second();

    secondClass.thirdClassFunction();

    /* console.log(secondClass.asd + ' ' + secondClass.asd2);

    console.log(firstClass.firstName);

    secondClass.testFunction(); */


    this.howManyWheels = {
      'bus': 8,
      'car': 4,
      'motor': 2
    }

    this.omitType = {
      age: 10,
      firstName: 'Teszt',
      lastName: 'Ádám'
    }
  }


  asd() {
    let asd;
    const asdd = '';
  }


  testArrowFunction = (test1: string):string => {
    console.log('THIIIIS',this);
    return test1;
  }
  
}
