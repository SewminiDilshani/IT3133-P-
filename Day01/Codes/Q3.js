// Break a whole no into digitsblike 4562-> 4,5,6,2

let num = 4562;
let digits = [];

while (num > 0) {
    let digit = num % 10;        // get last digit
    digits.unshift(digit);       // insert at beginning
    num = Math.floor(num / 10);  // remove last digit
}

console.log(digits); 

