/* this with variable
this inside function
this with objects
this with class and constructor*/

this.lastName = 'Gupta';
console.log(this.lastName)

function a(){
    console.log(this.lastName)
}
a.call(this);

const name = {
    lastName : this.lastName
}
console.log(name.lastName);

class Name{
    
    constructor(name){
        this.lastName = `${name}`
    }
    printHello(){
        console.log(`Hello ${this.lastName}`)
    }
}

let name1 = new Name('Mayank');
console.log(name1.lastName)
name1.printHello();