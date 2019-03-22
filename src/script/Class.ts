class Dog {
    sex: number;

    constructor(sex: number) {

        this.sex = sex;
    }

    eat(): void {
        console.log('aaa');
    }
}

let dog1 = new Dog(1)
console.log(dog1.sex)
dog1.eat()


