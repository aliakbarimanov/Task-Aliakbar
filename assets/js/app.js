//! ["Salam"] -->  "Slm"

function removeVowels(){

    // Main Arrays
    const vowels = ["a", "e", "i", "o", "u"];
    const hi = ["Salam"];

    // Main Variables
    let res = [];
    let arr = "";

    // Loop
    for(let i=0; i<vowels.length; i++){
        arr += vowels[i];
    }

    if(arr.includes(hi.toString())){
        res.push(arr);
    }

    console.log(res.toString());
}


removeVowels();





























// includes();

// let arr = [];
// let brr = ["as", "bs", "cs"];
// let crr = "hjk";

// let res = "";
// for (let i = 0; i < brr.length; i++) {
//   res += brr[i];
// }

// if (!crr.includes(res)) {
//   arr.push(res);
// }

// console.log(arr);
