
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