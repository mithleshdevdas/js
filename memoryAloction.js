// primitive data type ka memory
// Alloction stack me hota hai

// stack me value ki copy diya jata hai origal value change ni hoti
// primitve data type memory Allocation
// stack

let userNameOne = "mithlesh";

let userNameTwo = userNameOne;
userNameTwo = 'devdas'

console.log(userNameOne);
console.log(userNameTwo);

// non pimive data type Aloction

// heap memory alloction me value ka refres diya jata hai
// jisse uski value change ho jati hai


// heap

let userOne = {
    email: 'mk@gmail.com',
    id: 123
}

let userTwo = userOne

userTwo.email = "das@.com,"
console.log(userOne.email);
console.log(userTwo.email);
// 


