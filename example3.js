// 2)
// setTimeout(() => console.log('timer1 expired'), 1000)
// setTimeout(() => console.log('timer2 expired'), 0)
// function x(y) {
//     console.log('inside x');
//     y();
// }
// x(function y() {
//     console.log('inside y')
// })

// Output => 
// inside x
// inside y
// timer2 expired
// timer1 expired

// 3)
// setTimeout(() => console.log('timer1 expired'), 1000)
// setTimeout(() => console.log('timer2 expired'), 0)
// function x(y) {
//     console.log('inside x');
//     y();
// }
// x(function y() {
//     setTimeout(() => console.log('inside y'), 0)
// })

// Output => 
// inside x
// timer2 expired
// inside y
// timer1 expired