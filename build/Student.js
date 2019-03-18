var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getAgeAndName = function (age, name) {
        var message = name + age;
        document.getElementById('display').innerText = message;
        // return "hello: " + message;
    };
    return Student;
}());
var stu = new Student();
console.log(stu.getAgeAndName(7, 'guoguo'));
//# sourceMappingURL=Student.js.map