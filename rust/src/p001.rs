use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn p001() -> u32 {
  (1..1000).filter(|&n| n % 3 == 0 || n % 5 == 0).sum()
}