// Primitive data type
// just wiw
// 7 type od primitive data type
/*
1.  string = " ", double qute, ' ' single code, ` ` backtick me likh skte hai


2. number = number se liletest

3.  boolan = true ,false

4.  null = null ki value emty hota hai 0 ni

5. undefined = varible name likh kr value assin ni karte h wo undifind hai

6. symbol = symol ka use uniq ids ke liye kiya jata hai

7. BigInt = Big data ko hale krta hai

*/

let userName = 'mithlesh devdas'
console.log(userName);
console.log( typeof userName);

let userAge = 25
console.log(userAge);
console.log( typeof userAge);

let userIsmarried = false
console.log(userIsmarried);
console.log( typeof userIsmarried);

let userAdress
console.log(userAdress);
console.log( typeof userAdress);

let userJob = null
console.log(userJob);
console.log( typeof userJob);

let userId = Symbol('#user.json')
console.log(userId);
console.log( typeof userId);

let userData = 133565665n
console.log(userData);
console.log( typeof userData);

// console.table([ userName,userAge,userIsmarried,userAdress,userJob,userId,userData]);


// non Primite data type

// Array ,Object ,function

const mySuperHeros = ['krish', 'saktiman'];
console.log(mySuperHeros);
console.log(typeof mySuperHeros);

const myObj = {
    name: 'raja',
    age: 25,
    islogin: true
}
console.log(myObj);
console.log(typeof myObj);

const myFunction= function() {
  console.log('wow');  
}

console.log(myFunction());
console.log(typeof myFunction);



