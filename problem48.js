// https://projecteuler.net/problem=48

// The series, 11 + 22 + 33 + ... + 1010 = 10405071317.

// Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.

var x = BigInt(1);

var sum = BigInt(0);

for(let i = 1; i<=1000; i++){
  sum = sum + (BigInt(i) ** BigInt(i));
}

sum = sum.toString();

console.log(sum.slice(sum.length-10, ));

for(j=sum.length-1;j >= sum.length-10;j--){
  console.log(sum[j])
}

