interface Available {
    name: String[] | String | (() => string);
}

let a1: Available = {name: 'aa'}
console.log(a1.name)
let a2: Available = {name: ['aa', 'bb']}
console.log(a2.name)
let a3: Available = {name: () => 'bb'}


interface Useable extends Available {
    description: String;
}

let b1: Useable = {name: 'b1', description: 'description1'}
console.log(b1);
console.log(b1.name);
console.log(b1.description);

let c1 = <Useable>{}
console.log(c1);

interface Sellable extends Available, Useable {}
let d1: Sellable = {name: 'd1', description: 'dd1'}
console.log(d1);



