let rec loop = (a, b, acc) =>
  switch a + b {
  | x when x > 4_000_000 => acc
  | x when mod(x, 2) === 0 => loop(b, x, acc + x)
  | x => loop(b, x, acc)
  }

let p002 = () => loop(1, 1, 0)

