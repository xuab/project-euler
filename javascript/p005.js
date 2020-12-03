// 2520 is the smallest number that can be divided by each of the numbers from 1
// to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the
// numbers from 1 to 20?

const { range } = require('./utils')

const dividers = range(10, 20)

exports.p005 = () => {
  let n = 2520
  while (dividers.some((d) => n % d > 0)) n += 2520
  return n
}