exports.range = (start, end) =>
  Array.from({ length: 1 + end - start }, (_, i) => 1 + i + start)
