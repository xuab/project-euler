(* If we list all the natural numbers below 10 that are multiples of 3 or 5, we
get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000. *)

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