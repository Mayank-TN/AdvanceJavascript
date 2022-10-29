class MyStack{
    
    

    constructor(){
        this.stackArray = []
        let top = -1;
    }

    push(data){
        this.stackArray.push(data)
    }

    pop(){
        if(this.stackArray.length==0){
            return 'UnderFlow'
        }
        return this.stackArray.pop();
    }

    peek(){
        return this.stackArray[this.stackArray.length-1]
    }
    isEmpty(){
        if(this.stackArray.length===0){
            return true;
        }
        return false;
    }

    printStack(){
        var str = "";
        this.stackArray.forEach((item)=> str= str+item +" ")
        return str;
    }
    
}

let stack = new MyStack();
stack.push(20)
stack.push(40)
stack.push(60)
stack.pop()

console.log(stack.peek())

console.log(stack.isEmpty())
console.log(stack.printStack())