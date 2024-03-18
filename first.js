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
 
//Objects
//Object literalsl
// let input = 'name' //user input
// let book ={
//     name: "Classmate",
//     size: "long",
//     cost: 12
// }
// console.log(book.size);
// console.log(book['name']);

//complex object onbject inside object
// let alien = {
//     name: 'Human',
//     tech: 'Java',
//     laptop: {
//         cpu: 'i3',
//         ram: 4,
//         brand:'dell'
//     }
// }
// delete alien.laptop
// console.log(alien);
//console.log(alien.laptop.brand.length)

// function reverseNumber(number) {
//     let reversedNumber = 0;
//     while (number !== 0) {
//         reversedNumber = reversedNumber * 10 + number % 10;
//         number = Math.floor(number / 10);
//     }
//     return reversedNumber;
// }

// // Example usage:
// const number = 12345;
// const reversed = reverseNumber(number);
// console.log("Original Number:", number);
// console.log("Reversed Number:", reversed);

// let marker = {
//     name: 'red',
//     size: 'long',
//     laptop:{
//         cpu : 'i3',
//         ram: 4,
//         brand: 'dell'
//     }
// }
// for(let key in marker){ // for in loop
//     console.log(key,marker[key])
// }
//console.log(marker.laptop);

//functions
// function print(){
//     console.log("Hii");
// }
// print();

//return and pasing valus
// function print(user){
//    return user;
// }
// let user = "human";
// let str = print(user);
// console.log(str);

//function expression anunomus function
// let add = function(num1,num2){
//     return num1+num2;
// }
// // let result = add(2,3);
// // console.log(result);
// let sum = add;
// let result = sum (2,5);
// console.log(result);

// function add(num1, num2){
//     return num1 + num2;
// }

// let sum = add(2,3);
// console.log(sum)

// function greet(u){

//     return u;

// }
// let user = "virat";
// let str = greet(user);
// console.log(str);

//loacl-global- default variables
// function add(num1,num2,num3=1){ //Whnenever we didnt pass the value it accepct default value

//     console.log(num1, num2, num3);
//     return num1+num2+num3;

// }
// let result = add(1,5,4);
// console.log(result);

//Arrow function
// let greet = (user) => {
 
//     console.log("Hello " + user);
//     return 'Hii';
// }
// console.log(greet("Kohil"));

//this keyword
// let laptop1 = {
//     cpu : "i3",
//     ram : 2,
//     brand : "hp",

//     greet: function(){
//         console.log(laptop1.cpu);
//     }
// }
// //laptop1.greet();

// let laptop2 = {
//     cpu : "i6",
//     ram : 8,
//     brand : "dell",

//     greet: function(){
//         console.log(this.cpu);
//     }
// }
// laptop2.greet();
// function getFastLaptop(laptop1,laptop2){

// if(laptop1.cup > laptop2.cpu)

//     console.log(laptop1);
    
//     else
//         console.log(laptop2);
    
// }

// let laptop2 = {
//     cpu: 'i5',
//     ram: 16,
//     brand: "Apple",

//     getConfig: function(){
//         console.log(this.cpu);
//     }}
// let laptop1 = {
//     cpu: 'i3',
//     ram: 16,
//     brand: "Hp",

//     compare: function(other){
//         if(this.cup > other.cpu)
//          console.log(this);
//     else
//         console.log(other);
//     },
//     getConfig: function(){
//        console.log(this.cpu);
//     }}
// laptop1.compare(laptop2);

//constructor function
// function Alien(name, tech){
//     this.name= name;
//     this.tech=tech;
//     this.work = function(){
//        console.log("Solving bugs");
//     }
    
// }
// let alien1 = new Alien('Virat','Js') // create new object
// let alien2 = new Alien('Kohil','Java')
// alien1.tech="bb"
// console.log(alien1);
// alien1.work();

//arrays
// let values = [1,23,45] // let values = [];

// // values.push(55);
// // values.push(65);

// console.log(values.length);
// console.log(values[4]);

//let names = ['Virat','anuskha','vamika'];
// let data = ['Smriti', 5,{tech:'js'},function () {
// console.log("RCB");    
// }]
// console.log(data);
// data[3]();

// let data = [2,3,4];
// console.log(data.push(2)) //add the element at the end of the array
// console.log(data.pop()); // itwill remove last element
// console.log(data.shift()); // remove data from the first
// console.log(data.unshift());//add a new value
// console.log(data.slice(2,2));//first index 2nd number of values to delete
// console.log(data)

//for in loop 
// let nums = [];
// nums[0] = 5;
// nums[99] = 9;
//console.log(nums.length)
//print all the element one by one
// for(let n of nums){
//     console.log(n)
// }
// for(let key in nums){
//     console.log(nums[key])
// }

//Destructure array
// let nums = [1,2,3,4,6];
//console.log(nums[0]);
//let [a,b,,d] = nums; // destructure array
// console.log(d);

// let a = 5;
// let b = 6;
// [a,b] = [b,a]
// console.log(a,b)

// let words = "My name is virat kohil cricket player".split(' ');
// // let [a,b,c,d] = words;
// // console.log(a,b,c,d);
// let [a,b,, ...d] = words; // Three dots it means rest of the elements

// console.log(d);

//forEach method it will give one by one value 

// let nums = [42,51,24,98,67,89];

// nums.forEach((n,i,nums) => {
//     console.log(n,i,nums);
//    // console.log(n*2);
// });

// console.log(nums);

//Array method filter map reduce

//filter() for filter

//map it will take a value and change a value

// let nums = [1,2,3,4,5,6,7,8,9];
// let result = nums.filter(n => n%2==0) // filter the value
//     .map(n => n*2)   //take a value and double it
//     .reduce((a,b) => a+b); // reduce will return only one value
//     console.log(result);
//    .forEach( n    => { // print it
//     console.log(n);
//  });

//set it is a collection of unique element and unorderd list not maintain the sequence, not index value

// let nums = new Set(); // result bokepr not allowed duplicates
// nums.add(3);
// nums.add(4);
// nums.add("Virat");
// nums.add("Anushka");

// // nums.forEach((value) =>{
// //     console.log(value);
// // });
// console.log(nums.has(3)); //has is a method to check a value persent or not

//Map u can have value and every value have key and value pair

// let map = new Map();
// map.set("Vamika" , "Java");
// map.set("Aakya" , "js");
// map.set("Joythi" , "web");
// map.set("Vamika" , "blockchain"); //override the value
// //console.log(map.keys());
// //console.log(map.has("Vamika"));
// // for(let [k,v] of map){
// //     console.log(k," :",v);
// // }
// map.forEach( (k,v) => {
// console.log(k,":",v)
// });

//recursion
let num = 1;
function show() {
    console.log("Hiii", num);
    num++;
    if(num<=10330)
    show();
}
show();