exports.pad = (x, n) => {
  const s = x.toString()
  const c = n - s.length
  return c < 1 ? s : s + Array(c).fill(' ').join('')
}