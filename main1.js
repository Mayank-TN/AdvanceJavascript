// Currying is a function that takes one argument at a time and returns a new function expecting the next argument.
// Using bind method

const multiply = function(x,y){
    console.log(x*y);
}

const multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5);
const multiplyByThree = multiply.bind(this,3);
multiplyByThree(10);


// Using closure

const sum = function(x){
    return function(y){
        console.log(x+y);
    }
}

const sumBy10 = sum(10);
sumBy10(20);

const sumBy20 = sum(20);
sumBy20(20);