// hoisting
//greetings();

function greetings(){
    console.log("Hello World");
}

//Anonymous function after the equal sign because the function dosent have a name.
const  greetingsInAVariable = function (){
    console.log("Hello World in a variable");
}


//Arrow function after the equal sign.
const greetingsArrowFunction = () => {
    console.log("Hello World as an arrow function")
}


//Callback funtion - anyFunctionReference parameter is a callback function 
//and is a function that is passed as an argument, that potetiolly can be called back later
//A Genearic function.
function doingSomething(anyFunctionReference,name){
    //A lot of things can happen here first....
     anyFunctionReference(name);
}

//Making a specific action to give the genaric function an action.
const running = name => console.log(`${name} is running`);

const drinking = name => console.log(`${name} is drinking`);

const skiing = name => console.log(`${name} is skiing`);

doingSomething(running,"Your name");
doingSomething(drinking,"Someone");
doingSomething(skiing,"Julius");


//to do this we need to do return in the doingSomething function
const result = doingSomething(name => name + "is studying","MyName")

console.log(result);
