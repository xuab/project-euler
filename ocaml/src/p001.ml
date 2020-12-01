let loop n =
  let rec loop' x result =
    match x >= n with
    | true -> result
    | false -> begin
        let result = match (x mod 3 = 0) || (x mod 5 = 0) with
          | true -> result + x
          | false -> result
        in
        loop' (x + 1) result
      end
  in
  loop' 3 0

let p001 () = loop 1000