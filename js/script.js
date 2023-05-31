
// ? Task #1
// ? Find the Highest Integer in the Array Using Recursion
//  todo Try to solve with recursion !!!

// function findHighest(arr) {
// 	return arr.sort((a, b) => b - a)[0];
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInp = document.querySelector(".inp");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = findHighest(myInp.value.trim().split(" "));
// }

// ? Task #2
// ? Factors of a Given Number

// function findFactors(num) {
// 	let arr = [];
// 	for(let i =1; i <= num; i++)
// 		{
//              if(num % i === 0)
// 				 arr.push(i);
// 		}
// 	return arr;
// }

// ? Task #3
// ? Simple Letters

// function longestString(str1, str2) {
// 	let arr = [];
// 	let abc = (str1.concat(str2)).split('').sort();
// 	for(let i =0; i < abc.length; i++)
// 		{
// 			if(abc[i] !== abc[i+1])
// 				arr.push(abc[i]);
// 		}
// 	return arr.join('');
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = longestString(firstInp.value, secondInp.value);
// }

// ? Task #4
// ? Between Words

// function isBetween(first, last, word) {
// 	if(first < word && last > word)
// 		return true;
// 	return false;
// }

// ? Task #5
// ? Move Capital Letters to the Front

// function capToFront(s) {
// 	let capLet = s.match(/[A-Z]/g);
// 	let lowLet = s.match(/[a-z]/g);
	
// 	return (capLet.concat(lowLet)).join('');
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInp = document.querySelector(".inp");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = capToFront(myInp.value);
// }

// ? Task #6
// ? Semantic Versioning

// function retrieveMajor(semver) {
// 	return semver.split(".")[0]
// }

// function retrieveMinor(semver) {
// 		return semver.split(".")[1]
// }

// function retrievePatch(semver) {
// 		return semver.split(".")[2]
// }

// ? Task #7
// ? Remove Every Vowel from a String

// function removeVowels(str) {
// 	return str.replace(/[aeiou]/gi, "");
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInp = document.querySelector(".inp");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = removeVowels(myInp.value);
// }

// ? Task #8
// ? Sort the Unsortable

// function sortIt(arr) {
// 	return arr.sort((a, b) => a-b)
// }

// ? Task #9
// ? Distance Between Two Points

// function getDistance(a, b) {
// 	let aObj = Object.values(a);
// 	let bObj = Object.values(b);
// 	let pow = Math.round(Math.pow((Number(aObj[0]) - Number(bObj[0])), 2) + Math.pow((Number(aObj[1]) - Number(bObj[1])), 2));
// 	if(pow === 0)
// 		return 0;
// 	return Number(Math.sqrt(pow).toFixed(3));
// }

// ? Task #10
// ? City School Creating IDS

// function createID(firstname, lastname) {
// 	return firstname[0].toLowerCase() + lastname[0].toUpperCase() + lastname.slice(1,3).toLowerCase()
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = createID(firstInp.value, secondInp.value);
// }

// ? Task #11
// ? Burglary Series (03): Is It Gone?

// function findIt(obj, name) {
// 	return Object.keys(obj).includes(name) ? `${name[0].toUpperCase()}${name.slice(1, name.length)} is gone...` : `${name[0].toUpperCase()}${name.slice(1, name.length)} is here!`
// }

// ? Task #12
// ? Make a Circle with OOP

// class Rectangle {
//     constructor(sideA, sideB) {
//       this.sideA = sideA
//       this.sideB = sideB
//     }
//     getArea(){return this.sideA*this.sideB}
//     getPerimeter(){return (this.sideA + this.sideB) *2}
//   }
//   class Circle {
//       // put your code here
//       constructor(radius){
//           this.radius = radius;
//       }
//       getArea() {return Math.PI * Math.pow(this.radius, 2)};
//       getPerimeter() {return 2 * Math.PI * this.radius};
//   }
  
// ? Task #13
// ? Hitting the Jackpot

// function testJackpot(result) {
// 	return result.every(elem => elem === result[0]);
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = testJackpot(firstInp.value.trim().split(" "));
// }

// ? Task #14
// ? True Ones, False Zeros

// function integerBoolean(n) {
// 	return n.split("").map(elem => Number(elem) === 1 ? true : false)
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = integerBoolean(firstInp.value);
// }

// ? Task #15
// ? Match the Last Item

// function matchLastItem(arr) {
// 	let lastElem = arr.pop();
// 	return arr.join('') === lastElem
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = matchLastItem(firstInp.value.trim().split(" "));
// }


// ? Task #16
// ? Transform Upvotes

// function transformUpvotes(str) {
// 	let arr = str.split(" ");
// return 	arr.map(elem => elem.slice(-1) === 'k' ? (elem.slice(0, elem.length-1)) * 1000 : Number(elem))
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = transformUpvotes(firstInp.value);
// }

// ? Task #17
// ? Burglary Series (01): Calculate Total Losses

// function calculateLosses(obj) {
// 	let arr = Object.values(obj);
	
// 	if(arr.length === 0)
// 		return "Lucky you!";
// 	return arr.reduce((acc, cur) => {return Number(acc)  + Number(cur)},0)
// }