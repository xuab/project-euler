exports.range = (...args) => {
  const [start, end, step] =
    args.length === 1 ? [0, end, 1] : args.length === 2 ? [...args, 1] : args

  return Array.from(
    { length: Math.ceil((end - start) / step) },
    (_, i) => i * step + start,
  )
}
