// Problem 20 https://projecteuler.net/problem=20
function factorize(num) {
  
  if(num ===  BigInt(1)) {
    return num
  }
  
  return num * factorize(num - BigInt(1));
  
}

var x = factorize(BigInt(100));

var xToString = String(x);

var sum = 0;

for (var i = 0; i < xToString.length; i++) {
  sum = sum + parseInt(xToString[i]);
}

console.log(sum); // 3628800