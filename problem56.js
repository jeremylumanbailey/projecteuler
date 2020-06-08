"use strict";
/*
https://projecteuler.net/problem=56

A googol (10100) is a massive number: one followed by one-hundred zeros; 100100 is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.

Considering natural numbers of the form, ab, where a, b < 100, what is the maximum digital sum?

*/

const {performance} = require('perf_hooks');
const t0 = performance.now();


let max = 1; 
let summ = 0;
let num = BigInt(0);
let numString = "";
for(let a = 1; a < 100; a++){
    for(let b = 1; b < 100; b++){
        num = BigInt(a)**BigInt(b); // a^b          Math.sqr(a,b)
        numString = num.toString();
        summ = 0;
        for(let eachChar of numString) {            
            summ += parseInt(eachChar);
        }
        if(summ > max){
            max = summ;
        }

    }
}

console.log("The answer is: " + max);

const t1 = performance.now();
console.log(`Problem 56 took ${t1 - t0} milliseconds.`);