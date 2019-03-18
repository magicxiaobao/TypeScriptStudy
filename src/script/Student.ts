class Student {

    getAgeAndName(age: number, name: string) {
        const message = name + age;
        document.getElementById('display').innerText = message;
        // return "hello: " + message;
    }
}
let stu = new Student();
console.log(stu.getAgeAndName(7, 'guoguo'));
