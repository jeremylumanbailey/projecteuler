// https://projecteuler.net/problem=16

let x = BigInt(2);
let y = x ** 1000n;
let z = y.toString();
let sum = 0
for(let char of z){
  sum += parseInt(char);
}

console.log(sum);
