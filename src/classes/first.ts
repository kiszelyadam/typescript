export class First {
    protected firstName: string;
    protected lastName: string;


    constructor(_firstName: string, _lastName: string) {
        this.firstName = _firstName;
        this.lastName = _lastName
    }


    get fName() {
        return this.firstName;
    }

    set setfName(name: string) {
        this.firstName = name;
    }

    testFunction() {
        console.log('IDE');
    }

}