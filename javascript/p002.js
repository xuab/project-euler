exports.p002 = () => {
  let curr = 0
  let next = 1
  let sum = 0

  while (curr < 4_000_000) {
    if (curr % 2 === 0) sum += curr
    ;[curr, next] = [next, curr + next]
  }

  return sum
}
