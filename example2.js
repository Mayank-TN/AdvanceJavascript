//Design pattern problem - 
//How will you design a Student class which stores the name , age , phone number, board marks of each student.
// Make a constructor to initialize the values.

class Student{
    static count = 0;
    constructor(name , age , phoneNumber , marks){
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.marks = marks
        Student.increase();
    }

    static increase(){
        this.count +=1 ;
       }
    isEligibilityToCollege(){
        (this.marks>40)? console.log('Eligible') : console.log('Not Eligible');
    }
}

let student1 = new Student('mayank' , 24 , 12345 , 100)
let student2 = new Student('any' , 25 , 12345 , 30)
let student3 = new Student('ronish' , 28 , 1236 , 50 )
let student4 = new Student('abhi' , 20 , 145 , 20)
let student5 = new Student('john' , 29 , 2345 , 10)
// console.log(student1)
// student1.isEligibilityToCollege();
// student2.isEligibilityToCollege();
console.log(Student.count);