var str = 'string type';
var num = 4;
var template = "template is string " + str + " and " + (num + 1);
console.log(str);
console.log(num);
console.log(template);
var flag = false;
console.log(flag);
var strings = ['aa', 'bb', 'cc'];
console.log(strings);
var nums = [1, 2, 3];
console.log(nums);
// 元祖
var meta;
meta = ['aa', 1];
console.log(meta[0]);
// 枚举
var Sex;
(function (Sex) {
    Sex[Sex["Male"] = 0] = "Male";
    Sex[Sex["Female"] = 1] = "Female";
})(Sex || (Sex = {}));
var s = Sex.Male;
var f = Sex.Female;
console.log(s);
console.log(f);
// void
function fc() {
    console.log('void with no return result');
}
fc();
// any的用法
var anyArray = [1, '1'];
console.log(anyArray);
// null 和 undefined
var x;
x = null;
// x = undefined;
console.log(x);
var ss;
ss = 'a';
ss = null;
ss = undefined;
// never
var ne;
var y;
ne = (function () { throw new Error('aa'); })();
// ne = 3
y = (function () { throw new Error('aa'); })();
function throwNever() {
    throw new Error('error');
}
throwNever();
function deadCycle() {
    while (true) {
    }
}
deadCycle();
//# sourceMappingURL=BaseType.js.map