// Problem 13 
// https://projecteuler.net/problem=13

var fs = require('fs');

try {  
    var data = fs.readFileSync('problem13input.txt', 'utf8');
    // console.log(data.toString());    
} catch(e) {
    console.log('Error:', e.stack);
}

str = data.toString();


var arr = str.split("\n");

var sum = BigInt(0);
for (var i = 0; i < arr.length; i++) {
  sum += BigInt(arr[i]);
}
console.log(sum);

var sumString = sum.toString();

var tenDigit = '';
for (var i = 0; i < 10; i++) {
  tenDigit = tenDigit + sumString[i];
}

console.log(tenDigit);