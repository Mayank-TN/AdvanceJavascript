// 1)
// console.log('a');
// console.log('b');
// setTimeout(() => console.log('c'), 1000)
// console.log('d')

// Output =>
// a
// b
// d
// c


// 2)
// console.log('a');
// console.log('b');
// setTimeout(() => console.log('c'), 0)
// console.log('d')

// Ouput =>
// a
// b
// d
// c


// 3)
// console.log('a');
// console.log('b');
// setTimeout(() => console.log('e'), 1000)
// setTimeout(() => console.log('c'), 0)
// console.log('d')

// Output =>
// a
// b
// d
// c
// e


// Watch this video and answer the following

// What is the use of spread operator?
// Give some example with object.
// Give some example with array.


// 4) Given a student object  as shown below can you write code to iterate through object and find average age of students
// Input
// studentobj = {
// 	'yash': 26,
// 	'vaibhav': 24,
// 	'rajesh' : 25,
// 	}

// Output
// Average age  = 25

// Explanation 
// On adding all the ages we get 75
// Total number of keys  = 3
// So 75/3 = 25.


// Can you write a function which takes the object and return average age.
// function findaverageage(studentObj){
// 	//write your code here.
    
//     const arr = Object.values(studentObj)
//     let sum = 0;
//     arr.forEach((e)=> sum+=e)
//     let averageAge = sum/arr.length;
// 	return averageAge;
// }

// console.log(findaverageage(studentobj));