#![feature(test)]
extern crate test;
mod p001;

#[cfg(test)]
mod tests {
    use super::*;
    use super::p001::*;
    use test::Bencher;

    #[bench]
    fn bench_p001(b: &mut Bencher) {
        assert_eq!(233168, p001());
        b.iter(|| p001());
    }
}