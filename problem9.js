// https://projecteuler.net/problem=9

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.


outloop : for (let a = 1; a < 999; a++) {
  innerloop : for (let b = 1; b <999; b++){
    let c = 1000 - a - b;
    if(Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2) ) {
      console.log(a * b * c);
      break outloop;
    }
  }

}
