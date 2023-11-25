/**values and variables**/
// var myName = "vishakha singhal";
// console.log(myName);
// var _myAge = 26;
// console.log(_myAge)

/** data types**/ 
// var myName = "vishakha singhal";
// console.log(myName);

// console.log(typeof(myName))
// var amIGirl = true;
// console.log(amIGirl)
// console.log(typeof(amIGirl))

/*** challenge ***/
// console.log(10+"20") //concatenate
// console.log(9-"5")  //bug (4 will come)
// console.log("java" + "script") //concatenate
// console.log(" " + " ") //empty will be seen
// console.log(" " + 0) // 0 will come
// console.log("Vishakha" - "singhal") //NaN will come (not a number)
// console.log(true + true) //2 will come
// console.log(true+ false) //1
// console.log(false+false) //0
// console.log(false - true) //-1

/** null vs undefined **/
// var iamUseless = null;
// console.log(iamUseless)
// console.log(typeof(iamUseless))
// //2nd bug (object will come as output of data type)

// var iamStandBy;
// console.log(iamStandBy)
// console.log(typeof(iamStandBy)) //undefined will come as output

/** NaN **/
// var IsPhoneNumber = 9413014246;
// var IsmyName = "Vishakha";

// console.log(IsPhoneNumber)
// console.log(IsmyName)

// console.log(isNaN(IsPhoneNumber)) //ye number ko chodke baaki sb me true kehta h
// console.log(isNaN(IsmyName))

// if(isNaN(IsmyName)){
//     console.log('please enter valid phone number');
// }

//challenge time
// console.log(NaN === NaN) //false will come 
// console.log(Number.NaN === NaN) //false will come 
// console.log(isNaN(NaN)) //true will come 
// console.log(isNaN(Number.NaN)) //true will come 
// console.log(Number.isNaN(NaN)) //true will come

/** operators **/
// var x=5;
// var y=5;

// console.log("is both x and y are equal or not" + x===y) //false will come (isse wrong ans milega addition me + operator ki wjaha se)
// console.log(x===y) //true will come

//  console.log(`is both x and y are equal :  ${x===y}`)  // true will come along with statement (ES6 ka part hai ye)

//challenge time
// console.log(3**3) //it means 3 ki power 3 (exponentiation operator)
// console.log(10**-1) // it is 1/10
// console.log(2 -"vishi") //nan
// console.log(2 +"vishi") //concatenate

//swap 2 numbers
// var a = 5;
// var b = 10;
// var c;

// c = a;
// a = b;
// b = c;
// console.log(a)
// console.log(b)

// swap 2 numbers without using 3rd variable
// var a =5;
// var b =10;

// a= a+b;
// b= a-b;
// a= a-b;

// console.log(a)
// console.log(b)

/**IQ 3(== VS ===) */
// var a = 5
// var b = '5'

// console.log(a==b) //true
// console.log(a===b) //false

/** challenge- check given year is leap year or not **/
// var year = 2024;
// if((year%4 === 0 && year%100!==0) || year%400 === 0)
// console.log("leap year");
// else
// console.log("not")

/**challenge - truthy and falsey (falsey:- 0," ",null, undefined, nan, false) */

// find the area of circle, triangle and rectangle

// var area="circle";
// var l=5, b=4;
// var PI =3.14 , r=3;

// switch(area){
//     case 'circle':
//         console.log("area of circle is:" +PI*r**2);
//         break;
//     case 'rectangle':
//         console.log("area of rectangle is:" +l*b);
//         break;
//     case 'triangle':
//         console.log("area of triangle is:"+(l*b)/2);
//         break;
//     default:
//         console.log("please enter valid data");

// }

/** print table for given number using for loop */
// var number=8;
// for(var i=1;i<=10;i++){
//     console.log(number + "*" + i + "=" + number * i)
// }  

/**fun expressions */
// function sum(a,b){
//     var total = a+b;
//     return total;
// }
// var funexp = sum(5,15);
// console.log(funexp);

/** anonymous fun expression10*/
// var funexp = function(a,b){
//     var total = a+b;
//     return total;
// }
// console.log(funexp(5,150));

/*** Ecma Script 6 - Modern JS ***/
//1. var,let and const

// var myname = "Vishakha"
// console.log(myname)

// myname = "radha"
// console.log(myname) //variable name will change

// let myname = "Vishakha"
// console.log(myname)

// myname = "radha"
// console.log(myname) //variable name will change

// const myname = "Vishakha"
// console.log(myname)

// myname = "radha"
// console.log(myname) //variable name will not change

// var -> function scope
// let and const -> block scope

// function biodata(){
//     var myfirstname = "Vishakha"
//     console.log(myfirstname)
//     if(true){
//         var mylastname = "singhal"
//         console.log('inner ' + mylastname)
//         console.log('inner ' + myfirstname)
//     }
//     console.log('innerOuter '+ mylastname)
// }

// biodata();

/**it won't run because it will give error at line number 200 */
// function biodata(){
//     let myfirstname = "Vishakha"
//     console.log(myfirstname)
//     if(true){
//         let mylastname = "singhal"
//         console.log('inner ' + mylastname)
//         console.log('inner ' + myfirstname)
//     }
//     console.log('innerOuter '+ mylastname)
// }

// biodata();

//2. template literals
// for(let i=1;i<=10;i++){
//    let num =8;
// // console.log(num + "*" + i + "=" + num * i)
// console.log(`${num} * ${i} = ${num*i}`)
// }

//3. default argument
// function mult(a,b=5){
//     return a*b
// }
// console.log(mult(5));

//4. fat arrow function
// console.log(sum());
// function sum(){
//     let a=5; b=6;
//     let sum = a+b;
//     return `the sum of 2 numbers is ${sum}`;
// }
 // it can access sum function if we call function before writing

// now converting it into fat arrow function
// const sum = () =>{
//     let a=5; b=6; 
//     return `the sum of 2 numbers is ${a+b}`;
// }

// const sum = () => `the sum is : ${(a=5)+(b=6)}` 
// console.log(sum())

// we have to call function after defining it then only it will be called 


/**Arrays **/
// var myFriends = ['Swadesh','Yash','Simran','Chitransh','Kaku']
// console.log(myFriends[0])
// console.log(myFriends.length);
// console.log(myFriends[myFriends.length-1])

// for(var i=0;i<myFriends.length;i++){
//     console.log(myFriends[i])
// }

// /**in es6, we have for in and for of loop **/

// for(let elements in myFriends){
//     console.log(elements)
// } //it will return index (0,1,2,3,4)

// for(let elements of myFriends){
//     console.log(elements)
// } //it will return values at all index

// myFriends.forEach(function(element,index,array){
//     console.log(element)
// })

// myFriends.forEach(function(element,index,array){
//     console.log(element + " index: " + index);
// })

// myFriends.forEach(function(element,index,array){
//     console.log(element + " index: " + index + " " + array);
// })

// //fat arrow for for each function
// myFriends.forEach((element,index,array)=>{
//     console.log(element + " index: " + index);
// })

/**Searching and Filter**/

/* 1. indexOf() */
// var myFriends = ['vinod','thapatechnical','thapa','bahadur','thapa']
// console.log(myFriends.indexOf('thapa',2)) //return 2
// console.log(myFriends.indexOf('thapa',3)) //return 4
// console.log(myFriends.indexOf('Thapa',3)) //return -1

/* 2. lastIndexOf() */
// var myFriends = ['vinod','thapatechnical','thapa','bahadur','thapa']
// console.log(myFriends.lastIndexOf('thapa')) //return 4
// console.log(myFriends.lastIndexOf('thapa',3)) //return 2
// console.log(myFriends.lastIndexOf('Thapa',3)) //return -1

/* includes() */
// var myFriends = ['vinod','thapatechnical','thapa','bahadur','thapa']
// console.log(myFriends.includes('thapa')) //return true
// console.log(myFriends.includes('vishi')) //return false

/* find() */
// const prices = [100,200,300,400,500,600,700]
// const findEle = prices.find((currVal)=>{
//     return currVal <400
// })

// console.log(findEle)

//or we can written it as
// console.log(prices.find((currVal)=> currVal < 400 ))

/* findIndex() */
// const prices = [100,200,300,400,500,600,700]
// console.log(prices.findIndex((currVal)=> currVal < 400 ))

/**filter() */
// const prices = [100,200,300,400,500,600,700]
// const newpricetag = prices.filter((elem, index)=>{
//      return elem < 400
// })
// console.log(newpricetag)

/**Sort and Compare**/
//sort()

// const months = ['feb', 'dec', 'jan','march','august']
// console.log(months.sort())

// const numbers = [1,21,4,99,1000000,30]
// console.log(numbers.sort())

/**CRUD**/
//1. push()
// const animals = ['pigs','goats','sheep']
// animals.push('chicken','cow','hen')
// console.log(animals) //will return array list

// console.log(animals.push('chicken')) //will return length 5 dega output

//2. unshift()
// const animals = ['pigs','goats','sheep']
// animals.unshift('chicken')
// console.log(animals) //will return array list

// const mynumbers = [1,2,3,5]
// mynumbers.unshift(4,6)
// console.log(mynumbers)

//3. pop()
// const plants = ['rose','sunflower','lily','jasmine']
// console.log(plants)
// console.log(plants.pop())
// console.log(plants)

//4. shift()
// const plants = ['rose','sunflower','lily','jasmine']
// console.log(plants)
// console.log(plants.shift())
// console.log(plants)

/**challenge time */
//1. add dec at the end of array
//2. return value of splice() method
//3. update march to March (update)
//4. delete june from array

//sol1
// const months = ['jan','march','april','june','july']
// const newmonths = months.splice(5,0,'dec')
// //or we can write as
// // const newmonths = months.splice(months.length,0,'dec')
// console.log(months)

//sol2
// console.log(newmonths)

//sol3
// const months = ['jan','march','april','june','july']
// const updateMonths = months.splice(1,1,'March')
// console.log(months)

// const months = ['jan','march','april','june','july']
// const indexOfMonth = months.indexOf('march')
// if(indexOfMonth != -1){
//     const updateMonths = months.splice(indexOfMonth,1,'March')
//     console.log(months)
// }
// else{
//     console.log('no such data found')
// }

//sol4
const months = ['jan','march','april','june','july']
// const indexOfMonth = months.indexOf('june')
// if(indexOfMonth != -1){
//     const deleteMonths = months.splice(indexOfMonth,1)
//     console.log(months)
//     console.log(deleteMonths) //will return deleted elem
// }
// else{
//     console.log('no such data found')
// }

// const indexOfMonth = months.indexOf('april')
// if(indexOfMonth != -1){
//     const deleteMonths = months.splice(indexOfMonth,Infinity)
//     console.log(months)
//     console.log(deleteMonths) //will return deleted elem
// }
// else{
//     console.log('no such data found')
// }

/**map() */
// const array1 = [1,4,9,16,25]
// let newArr = array1.map((currEle , index , arr)=>{
//     return currEle >9
// })

// console.log(array1)
// console.log(newArr)

// const array1 = [1,4,9,16,25]
// let newArr = array1.map((currEle , index, arr)=>{
//     return `Index no = ${index} and the value is ${currEle} belongs to ${arr}`
// })
// console.log(newArr)

// const array1 = [1,4,9,16,25]
// let newArrfor = array1.forEach((currEle , index, arr)=>{
//     return `Index no = ${index} and the value is ${currEle} belongs to ${arr}`
// })
// console.log(newArrfor) // this will return undefined

/**challenge time 11 */
//1. find square root of each ele in array 
// let arr = [25,36,49,64,81]
// let rootArray = arr.map((currvalue)=>{
//     return Math.sqrt(currvalue)
// })
// console.log(rootArray)

//2. multiply each number by 2 and return only those which are greater than 10
// let arr = [2,3,4,6,8]
// let newArr = arr.map((currvalue)=>{
//     return currvalue*2
// }).filter((currEle)=>{
//     return currEle > 10
// })
// console.log(newArr)

/**reduce() */
// let arr = [5,6,8]
// let newArr = arr.reduce((accumulator, currEle, index, arr)=>{
//     return accumulator += currEle
// })
// console.log(newArr)

// let arr = [2,3,4,6,8]
// let newArr = arr.map((currvalue)=> currvalue*2).filter((currEle)=> currEle > 10).reduce((accumulator, currVal)=> accumulator+=currVal)
//     console.log(newArr)

// let arr = [5,6,8]
// let newArr = arr.reduce((accumulator, currEle)=>{
//     return accumulator += currEle
// },7)
// console.log(newArr)

/**flatten by reduce() */
// const arr = [
//                 ['zone1','zone2'],
//                 ['zone3','zone4'],
//                 ['zone5','zone6'],
//                 ['zone7','zone8']
//             ]
// let flatArr = arr.reduce((accum , currVal)=>{
//     return accum.concat(currVal)
// })
// console.log(flatArr)

// const arr = [
//     ['zone1','zone2'],
//     ['zone3','zone4'],
//     ['zone5','zone6'],
//     ['zone7',['zone1','zone2']]
// ]
// let flatArr = arr.reduce((accum , currVal)=>{
// return accum.concat(currVal)
// })
// console.log(flatArr) //it will not do completely flat

/** Strings in javascript **/
//1. escape character
// let str = "we are so called "vikings" from the north"
// console.log(str)

// let str =  "we are so called \"vikings\" from the north"
// console.log(str)

//2. indexOf()
// const myName = "I am Vishakha Singhal"
// console.log(myName.indexOf("Vishakha",5))

//lastIndexOf() -> same as array
//3.search()
// const myName = "I am Vishakha Singhal"
// console.log(myName.search("Vishakha")) //can't take 2nd argument

//4. slice()
// var str = "apple, banana, kiwi, mango"
// // let res = str.slice(0,4)
// // let res = str.slice(7,-2) //end tk jaega leking end ke 2 chod dega
// let res = str.slice(7)
// console.log(res)

/**challenge time- 11*/
//display only 280 characters of a string like the one used in twitter 
// let myTweets = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
// let myActualTweet = myTweets.slice(0,280)
// console.log(myActualTweet)

// substring()
// var str = "apple, banana, kiwi, mango"
// let res = str.substring(0,4)
// let res = str.substring(7,-2) //it won't work apple will be as output
// let res = str.substring(7)
// console.log(res)

//substr() -> 2nd prameter is length
// var str = "apple, banana, kiwi, mango"
// // let res = str.substr(0,4)
// // let res = str.substr(7,-2) //nothing will come as output
// let res = str.substr(-5) //will return data from back side
// console.log(res)

// replace(searchFor, replaceWith)
// let myName = "This is me vishakha singhal vishakha"
// let newData = myName.replace('vishakha','Vishakha') //only first vishakha will be changed as Vishakha
// console.log(newData)

/**extracting string chracters */
//1. charAt()
// var str = 'hello world'
// console.log(str.charAt(0))

//2. charCodeAt()
// var str = 'Hello world'
// console.log(str.charCodeAt(0))

/**challenge time */
//return the unicode of the last character in a string
// var str = 'Hello world'
// let lastChar = str.length-1
// console.log(str.charCodeAt(lastChar))

//3. property access
// var str = 'Hello world'
// console.log(str[0])

//other methods
// let myName = 'Vishakha Singhal'
// console.log(myName.toUpperCase())
// console.log(myName.toLowerCase())

// let fname = 'vishakha'
// let lname = 'singhal'

// console.log(fname + lname)
// console.log(`${fname} ${lname}`)
// console.log(fname.concat(lname))
// console.log(fname.concat(" ",lname))

// var str = "            hello       world               "
// console.log(str)
// console.log(str.trim()) //do not remove space from mid of strings


// var str= "a,b,c,d,e"
// var str = "a,b,c,|,d,e"
// var str = "a, b,c d,e"
// console.log(str.split(","))  //split on commas
// console.log(str.split(" "))  //split on space
// console.log(str.split("|"))  //split on pipe

/**date and time in javascript */
//creating date objects
// 4 ways to create a new date object
// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we can't avoid month section
// new Date(date string)

//1. new Date()
// let currDate = new Date()
// console.log(currDate)

// console.log(new Date())
// console.log(new Date().toLocaleString()) //22/11/2023, 2:32:28 pm
// console.log(new Date().toString()) //Wed Nov 22 2023 14:33:31 GMT+0530 (India Standard Time)

// console.log(Date.now()); //return milliseconds since 1 Jan, 1970

// var d = new Date(2018, 11, 24, 10, 33, 30, 0)
// var di = new Date(2018, 11, 24, 22, 33, 30, 0)
// var p = new Date(2018, 11, 24)
// console.log(d.toLocaleString())
// console.log(di.toLocaleString())
// console.log(p.toLocaleString())

// var d = new Date("August 25, 2001 07:05:00")
// console.log(d.toLocaleString())

// var d = new Date(1700643982925)
// console.log(d.toLocaleString())

// var d = new Date(0)
// console.log(d.toLocaleString())

/**date methods */
// const currDate = new Date()

//how to get the individual date
// console.log(currDate.toLocaleString()) //22/11/2023, 2:53:35 pm
// console.log(currDate.getFullYear()) //2023
// console.log(currDate.getDate()) //22
// console.log(currDate.getMonth()) //10 -> november (0-11)
// console.log(currDate.getDay()) //3 -> wednesday

//how to set the individual date
// console.log(currDate.setFullYear(2023))
// console.log(currDate.setFullYear(2023,10,3)) //this method can optionally set month & day
// console.log(currDate.setMonth(10))
// console.log(currDate.setDate(22))

/**time methods */
const currTime = new Date()

//how to get individual time
// console.log(currTime.getTime()) //it returns no. of milliseconds sincde 1 jan, 1970
// console.log(currTime.getHours()) //it returns hours of a date as a number (0-23)
// console.log(currTime.getMinutes()) 
// console.log(currTime.getSeconds()) 
// console.log(currTime.getMilliseconds())

//how to set individual time
// console.log(currTime.setTime())
// console.log(currTime.setHours(15)) //this method can optionally set month & day
// console.log(currTime.setMinutes(7))
// console.log(currTime.setSeconds(22))
// console.log(currTime.setMilliseconds(22))

//it will return NaN in all when we will comment setTime() method then it will return milliseconds in all.

//some important methods (get individual date or time only)
// new Date().toLocaleDateString() //22/11/2023
// new Date().toLocaleString() //22/11/2023, 3:03:27 pm
// new Date().toLocaleTimeString() //3:03:27 pm

/**js math object*/
// console.log(Math.PI)

// let num = 10.25625
// console.log(Math.round(num))
// console.log(Math.pow(2,3))
// console.log(2**3)
// console.log(Math.sqrt(49))
// console.log(Math.abs(-25));

// console.log(Math.ceil(4.51));
// console.log(Math.ceil(99.1));

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.9));

// console.log(Math.min(0,44,29,-484,29923,-28489))
// console.log(Math.max(0,44,29,-484,29923,-28489))

// console.log(Math.random())
// console.log(Math.random()*10); //0 to 9 as output with decimal
// console.log(Math.floor(Math.random()*10)); //0 to 9 as output witout decimal

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));

/**Dom navigation */
// 1: document.documentElement
      // returns the Element that is the root element of the document. 
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (include tab,enter and whiteSpace)
  // list of the direct children only 
// 5: document.children (without text nodes, only regular Elements)
// 6: document.childNodes.length

//👉 how to check whether ele has child node or not
// use document.body.hasChildNodes()

//👉 How to find the child in DOM tree
// firstChild vs firstElementChild
// lastChild vs lastElementChild 
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs 
// document.querySelector(".child-two").style.color = "yellow";

// 👉 How to find the Parent Nodes 
// document.body.parentNode
// document.body.parentElement

// 👉 How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling

/**search & getting element reference */
// seen in created file

/**events in javascript */
// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.


// HTML Events
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// HTML allows event handler attributes, with JavaScript code, 
// to be added to HTML elements.

/**oops in javascript */
//object literals - creation 2 ways
//1st way

// let bioData = {
//   myName: "Vishakha Singhal",
//   myAge: 26,
//   getData: function(){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`)
//   }
// }
// console.log(bioData.getData())

//2nd way-> no need to write function as well aftere es6
// let bioData = {
//   myName: "Vishakha Singhal",
//   myAge: 26,
//   getData(){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`)
//   }
// }
// console.log(bioData.getData())

//what if we want object as a value inside an object
// let bioData = {
//   myName: {
//      firstName: "Vishakha",
//      lastName : "Singhal"
//   },
//   myAge: 26,
//   getData(){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`)
//   }
// }
// console.log(bioData.myName.firstName)

/**"this" object */
//1st
// console.log(this) //it refers to current context & that is window global object

// 2nd
// function myName(){
//   console.log(this)
// }

// myName()

//3rd
// var myNames = "Vishakha"
// function myName(){
//   console.log(this.myNames)
// }

// myName() //its not running in my pc

//4th
// const obj = {
//   myage: 22,
//   myname(){
//     console.log(this)
//   }
// }
// obj.myname()

//5th
// const obj = {
//   myage: 22,
//   myname:()=>{
//     console.log(this)
//   }
// }
// obj.myname()

/**Ecmascript part 2 */
//arry destructuring

// const bioData = ['Vinod','Thapa',26]
// let fname = bioData[0];
// let lname = bioData[1];
// let myAge = bioData[2];

// console.log(myAge)
//now in destructuring we can write as 
// let[fname, lname, myAge] = bioData;
// console.log(myAge)

// we can add values too
// let[fname, lname, myAge,myDegree = "Btech"] = bioData;
// console.log(myDegree)

//object destructuring

// const bioData={
//   fname: 'vishakha',
//   lname: 'singhal',
//   age:22,
// }
// // let fname = bioData.fname
// // console.log(fname)
// let{fname, lname, myAge,myDegree = "Btech"} = bioData;
// console.log(myDegree)

/**object properties */
//can now use dynamic properties

// let myname = 'Vishakha'
// const myBio = {
//   [myname]: 'Hello, how are you?',
//   [20+6]: 'is my age'
// }
// console.log(myBio);

//no need to write key-value if both are same
// let myname = 'Vishakha Singhal'
// let myage = 22
// const mybio={
//   myname : myname,
//   myage : myage
// }

// console.log(mybio)

/**spread operator */
// const color = ['red','blue','green']
// const colors = ['red','blue','green','black','blue','white']
// const favColor = [...color,'black','blue','white' ]
// console.log(favColor)

/**ES 2020 */
//BigInt
// let oldnum = Number.MAX_SAFE_INTEGER
// // console.log(oldnum);
// const newNum = 9007199254740991n + 15n
// console.log(newNum);
// console.log(typeof newNum);

/**ES 2014 */
// "use strict";
// let x =3.14
// console.log(x)

/**Hoisting in Javascript*/
// console.log(myName);
// var myName;
// myName = 'Vishakha'    //undefined will come as output

//how it will be in output during creation phase
// 1. var myName = undefined;
// 2. console.log(myName);
// 3. myName = 'Vishakha'

// console.log(myName);
// let myName;
// myName = 'Vishakha'    //error will come

/**scope chain & lexical scoping */
// let a = 'Hello guys. ' //global scope
// const first = () =>{
//   let b = ' How are you?'
//   const second = () =>{
//     let c = 'Hi, I am fine. Thank you.'
//     console.log(a+b+c); //accessable
//   }
//   second()
//   console.log(a+b+c); //can't access c
// }
// first()

//closure in js
// const outerfun = (a) =>{
//   let b=10;
//   const innerfun =()=>{
//     let sum = a+b;
//     console.log(sum)
//   }
//   innerfun()
// }
// outerfun(5)

/**synchronous javascript */
// const fun2 = ()=>{
//   console.log('fun 2 is called');
// }

// const fun1 = ()=>{
//   console.log('fun 1 is called');
//   fun2()
//   console.log('fun 1 is called again');
// }

// fun1()

/**Asynchronous javascript */
// const fun2 = ()=>{
//   setTimeout(() => {
//     console.log('fun 2 is called');
//   }, 2000);
// }

// const fun1 = ()=>{
//   console.log('fun 1 is called');
//   fun2()
//   console.log('fun 1 is called again');
// }

// fun1()

/**function currying */
//output of sum(5)(3)(8)
// function sum(num1){
//   // console.log(num1)
//   return function(num2){
//     // console.log(num1,num2)
//     return function(num3){
//       console.log(num1,num2,num3);
//     }
//   }
// }

//or we can write in one line
// const sum = (num1)=>(num2)=>(num3)=> console.log(num1,num2,num3);
// sum(5)(3)(8)

/**callback hell */
// setTimeout(() => {
//   console.log('work 1 done');
//   setTimeout(() => {
//     console.log('work 2 done');
//     setTimeout(() => {
//       console.log('work 3 done');
//       setTimeout(() => {
//         console.log('work 4 done');
//         setTimeout(() => {
//           console.log('work 5 done');
//           setTimeout(() => {
//             console.log('work 6 done');
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);


/**json */
//json.stringfy()
var my_object = {key_1: "some text", key_2: true, key_3: 5}
var object_as_string = JSON.stringify(my_object)
//{"key_1": "some text", "key_2": true, "key_3": 5}
typeof(object_as_string) 
//"string"

//json.parse()
var object_as_string_as_object = JSON.parse(object_as_string)
console.log(object_as_string_as_object)
// {key_1: "some text", key_2: true, key_3: 5}
console.log(typeof(object_as_string_as_object))
//object