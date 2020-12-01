function isPalindrome(n) {
  const s = n.toString()
  return s === s.split('').reverse().join('')
}

function isMultipleOf3Digits(a) {
  let b = 1000
  let q
  while (b > 99) {
    b = b - 1
    q = a / b
    if (Number.isInteger(q) && q > 99 && q < 1000) return true
  }
  return false
}

exports.p004 = () => {
  let n = 999 * 999
  while (!isPalindrome(n) || !isMultipleOf3Digits(n)) n = n - 1
  return n
}
