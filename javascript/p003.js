// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

exports.p003 = () => {
  let j = 600_851_475_143
  let i = 2
  while (i <= j) {
    if (j % i === 0) {
      j = Math.floor(j / i)
    } else {
      i = i + 1
    }
  }
  return i
}
