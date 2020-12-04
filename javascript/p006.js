// The sum of the squares of the first ten natural numbers is
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural
// numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred
// natural numbers and the square of the sum.

const { range } = require('./utils')

const numbers = range(1, 101)
const square = (n) => n * n

exports.p006 = () =>
  square(numbers.reduce((acc, n) => acc + n, 0)) -
  numbers.reduce((acc, n) => acc + square(n), 0)
