//console.log("hello world!") 

// let is a keyword used to create a variable 
// let num = 2+2
// console.log(num + 3)

// need not be declare again bcz we already been declared
// num = 9
// console.log(num)

//Assigning a sting use double codes or single codes
// let userName = "Trupthi"
// console.log(userName)

// variable --can have characters 
            //number expect first position 
            //special char 
            //camel casing rule


// let radius = 5
// const pi = 3.14 // const is used for constants
// let area 

// area= pi*radius*radius // area of circle
// console.log(area)

//Data Types
// 2 types 
// primitive                                   object(Except all the primitive data type)
//number,string,boolean,null,undefined,symbol

// let num1 = 23.8 // floating point represntation
// console.log(typeof num1)
//Bigint(for long number)
// base 10 - decimale(0-9)
//base 2 - binary(0-7)
// base 8 - octal(0-7)
//base 16 - hexadecimal(0-9 & A-F)

// let num = 0xf
// let num1 = 1.5e12 // exponential
// let num2 = 105050505050505050501n   // - infinity to + infinity

// console.log(num2 + 2n) // BigInt

//String -- whenever we want to store text
// let firstName = "Trupthi"
// let lastName = "Mallesh"

// let user = firstName + " " + lastName

// let user2 = "Trupthi Mallesh" //escape char use backslash cancel the special meaning of that
// console.log(user)

//boolean
// let bool = 5 > 6
// console.log(bool)

//null 
// let user = null
// console.log(typeof user) // object

//  let user
//  console.log(user)
 
// let num = 5
// console.log(typeof (5/ "Navin")) //Nan(not a number)

// History of Javascript
// 1990 js lanched 1993 mosaic (browser) they found company called
// Netscape and created a broser called netscape navigator 
//Mocha while lanching livescrpit to javascript(java was famous cousin of java)


//type conversion and type coercion

// let num = String(6) // explict conversion

// console.log(typeof num, num)

// let x 
// console.log(x, typeof x)
// x = 8
// console.log(x, typeof x)
// x = x + ""
// console.log(x, typeof x) // coercion type x opposite type y
// x = x - 2
// console.log(x, typeof x) // based on operation 
// // ! this means not

// x = !x // number to boolean 
// console.log(x, typeof x)

// let x = 6
// console.log(Boolean(7)) // all num are true expect 0 0 is false this is called thuthy and falsy
// console.log(Boolean(null)) // falsy value
// console.log(Boolean(undefined)) // falsy value
// console.log(Boolean("navin")) // truthy

// num + string = string 
// num - string = number

//parseInt is a special function try to convert a string(if its starts from number)

// Arethmatic  Operations
// let num1 = 2
// let num2 = 4
// console.log(num1 ** num2) // fiest num is num and second is power 

// relational operator

// let data = 7 <= 6

// let x = "pen"
// let y = "Pook"
// let data = x <= y
// console.log(data)

// let x =  1              // operators   data     type
// let y = false           // ==           true    false
// let data = x === y      // ===          true    false
// console.log(data);

// Logical Opeartor
// let x = 7
// let y = 2, z = 5
// let result = x < y || x < z
// let n = !result
// console.log(result, n); 

// AND &  Ampersand(.) 
// OR |   pipeline(||)
// Not !  Tilde(~)

//conditional statments
 // if the given condition is true exceuted or else false means not exceuted

// let num1 = 6
// let num2 = 4
// let num3 = 7;

// if(num1 > num2 && num1 > num3){
//     console.log("Num1 is greater"); 
// }
// else if(num2 > num1 && num2 > num3){
// console.log("num2 is greater");

// }
// else{
// console.log("num3 is greater");
// }
// console.log("Bye...");

// Ternary operator

// if(num % 2 ===0){
//     console.log("Even");
// }
// else{
//     console.log("odd");
// }
// let num = 7
// let result
//  result = num%2===0 ? "Even" : "Odd"
//  console.log(result);

// switch statement
// Mon - 7am
//Tue - thurs -4am
// fri - 9am
// sat - sun - 8am

// let day = 'causal'
// switch(day){
//     case 'Monday' :
//         console.log("6AM");
//         break;
//     case 'Tuesday' :
//         console.log("7AM");
//         break;
//     case 'Wednsday' :
//         console.log("8AM");
//         break;
//     case 'Thursday' :
//         console.log("9AM");
//         break;
//     case 'Friday' :
//         console.log("10AM");
//         break;
//     case 'Saturday' :
//         console.log("11AM");
//         break;
//     case 'Sunday' :
//         console.log("12AM");
//         break;
//     default:
//         console.log("7Am - watch");
// }
// console.log("Get lost");

// Template Literal

// let num1 = 7;
// let num2 = 4;
// let result = num1 + num2
// console.log('The addition of ${num1} and ${num2} is ${result}');
// //console.log("The Addition of " +num1+ " and " +num2+" is "+result);
// console.log("My Name is \nTrupthi Mallesh");

//Loops
//while Loop
//initialize, condition, increment

// let i = 1;
// while(i<5){
//     console.log("Hii");
//     i++;
// }

//do While
// execute first after checks the condition
// let i = 0;
// do{
//     console.log("Hii",i);
//     i++;
// }while(i<5)

//for loop
//initalize condition upate

// for( let i=0;i<=5; i++){
//     console.log("hii");
//     for(let j=1;j<=5; j++){
//         console.log("Hello");
//     }
// }

// let num = 23455
// while(num>0){
//     console.log(num%10); // it gives last digit
//     num = parseInt(num/10)// this removes last num
// }

//to print reverse of num
//  let num1 = 123456;
//  let num2 = 0;
//  while(num1>0){
//    console.log(num1%10);
//     parseInt(num1 / 10);
   

//  } console.log(num2);


