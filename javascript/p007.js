// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.
// What is the 10 001st prime number?

const last = (l) => l[l.length - 1]

exports.p007 = () => {
  let primes = [3, 5, 7, 11, 13]
  let n = 15
  while (primes.length < 10_000) {
    const isPrime = !primes.some((p) => Number.isInteger(n / p))
    if (isPrime) primes.push(n)
    n += 2
  }
  return last(primes)
}