'use strict'
// https://projecteuler.net/problem=92
const TEN_MILLION = 10_000_000;
let countOf89s = 0;

function squareDigitSum(number) {
  return Math.pow(number, 2);
}

const squaredDigitsMapping = {
  '0': 0,
  '1': 1,
  '2': 4,
  '3': 9,
  '4': 16,
  '5': 25,
  '6': 36,
  '7': 49,
  '8': 64,
  '9': 81
};

let precomputedValues = {};

function willArriveAt89(number) {
  if (number === 89) return true;
  if (number === 1) return false;
  let arr = number.toString().split('');
  const reducer = (previousValue, currentValue) => previousValue + squaredDigitsMapping[currentValue];
  const sum = arr.reduce(reducer, 0);
  return willArriveAt89(sum);
}

for (let i = 1; i < TEN_MILLION; i++) {
  if (willArriveAt89(i)) countOf89s++;
}
console.log(countOf89s);

