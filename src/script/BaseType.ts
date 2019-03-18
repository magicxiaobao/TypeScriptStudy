let  str = 'string type';
let num = 4;
let template = `template is string ${str} and ${num + 1}`;
console.log(str);
console.log(num);
console.log(template);

let flag = false;
console.log(flag);

let strings: string[] = ['aa', 'bb', 'cc'];
console.log(strings);
let nums: Array<number> = [1, 2, 3];
console.log(nums);

// 元祖
let meta: [string, number];
meta = ['aa', 1];
console.log(meta[0]);

// 枚举
enum Sex {Male, Female}
let s: Sex = Sex.Male;
let f: Sex = Sex.Female;
console.log(s);
console.log(f);

// void
function fc(): void {
    console.log('void with no return result');
}
fc();

// any的用法
let anyArray: any[] = [1, '1'];
console.log(anyArray);

// null 和 undefined
let x: number;
x = null;
// x = undefined;
console.log(x);

let ss: string | null | undefined;
ss = 'a';
ss = null;
ss = undefined;

// never
let ne: never;
let y: number;
ne = (() => { throw new Error('aa'); })();
// ne = 3
y = (() => { throw new Error('aa'); })();
function throwNever(): never {
    throw new Error('error');
}
throwNever();
function deadCycle(): never {
    while (true) {

    }
}

deadCycle();
