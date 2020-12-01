let rec loop = (n, acc) =>
  switch n {
  | 0 => acc
  | x when mod(x, 3) === 0 || mod(x, 5) === 0 => loop(n - 1, acc + n)
  | _ => loop(n - 1, acc)
  }

let p001 = () => loop(999, 0)
