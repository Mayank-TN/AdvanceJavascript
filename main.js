const obj = { num : 20}

const sum = function(a,b){
    return a+ b + this.num
}


console.log(sum.call(obj, 20 ,10))  // call
console.log(sum.apply(obj,[20 , 10])) // apply

const bound = sum.bind(obj);  //bind
console.log(bound(20,10))


//4th deliverable printing age of student using bind
const student = { age : 10}
const getAge = function(){
    console.log(this.age)
}
const result = getAge.bind(student);
result();
