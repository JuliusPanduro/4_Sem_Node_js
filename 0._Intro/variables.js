"use strict"; //top level of a file or a function it checks some extra things

/*
dont use the variable var !!
var globaleVariable = "value";

totalGlobal = "NEVER do this!!";


const needs to be initialized
const monkey2;  - This wont work, and will fail

let does not need to be initialized
let monkey2; - This will work, and will not fail.

let binds to its scope

{
    let someVariable = true;
    {
        let someVarialbe = false;
    }
    console.log(someVariable);
}

*/

let banana = "Return to monkey"
console.log(banana);

banana = "Praise be Harambe";
console.log(banana);


const monkey = {
    name: "Harambe"
};

// monkey.age creates a key value inside the object
monkey.age = 16;


console.log(monkey);


for(let i =0; i < 5; i++){
    setTimeout(()=>{
        console.log(i);
    },1000);
}

/*
THIS IS WRONG AND WILL PRINT 5 x 5 times
for(var i =0; i < 5; i++){
        setTimeout(()=>{
            console.log(i);
        },1000);
}
*/

