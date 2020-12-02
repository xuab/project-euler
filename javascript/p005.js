// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const dividers = Array.from({ length: 20 }, (_, i) => i + 1)

exports.p005 = () => {
  let a = 2520
  while (dividers.some((d) => a % d > 0)) a += 2520
  return a
}