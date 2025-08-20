//Find 3 largest numbers in an array using sorting

let numbers = [12, 5, 87, 34, 56, 90, 1, 44];
numbers.sort((a,b)=>b-a);
let top3 = numbers.slice(0,3);
console.log("Three largest numbers: ",top3)