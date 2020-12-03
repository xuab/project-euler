// 2520 is the smallest number that can be divided by each of the numbers from 1
// to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the
// numbers from 1 to 20?

let notDivisible = (n) => Belt.Range.some(11, 20, (d) => mod(n, d) > 0)

let rec loop = (n) => {
  notDivisible(n) ? loop(n + 2520) : n
}

let p005 = () => loop(2520)
