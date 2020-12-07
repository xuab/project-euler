// A Pythagorean triplet is a set of three natural numbers, a < b < c,
// for which, a2 + b2 = c2. For example, 32 + 42 = 9 + 16 = 25 = 52.
//  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

exports.p009 = () => {
  let c = 335
  let b = 334
  let a = 1000 - c - b
  while (a + b + c !== 1000 || a * a + b * b !== c * c) {
    if (a > b || b === 2) {
      c += 1
      b = c - 1
    }
    b -= 1
    a = 1000 - c - b
  }
  return a * b * c
}
