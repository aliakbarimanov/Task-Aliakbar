//! Issue
//! ["Salam"] -->  "Slm"

// Main Arrays
const vowels = ["a", "e", "i", "o", "u"];
const arr = ["Salam"];

// Variables
let strArr = arr.toString().split("");
let strVowels = vowels.toString();
let resArr = [];

// Loop
for(val of strArr){
    if(!strVowels.includes(val)){
        resArr.push(val);
    }
}

let res = resArr.toString();

console.log(res);