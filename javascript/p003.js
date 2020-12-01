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
