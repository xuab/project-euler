BIN = node_modules/.bin
.PHONY: all build test start clean build-rescript build-ocaml build-rust
.DEFAULT_GOAL := start

all: build test

build: build-rescript build-ocaml build-rust

test:
	@ node test/index.js

start:
	@ $(BIN)/onchange -d 500 'javascript/p*.js' 'rescript/src/p*.res' 'ocaml/src/p*.ml' 'rust/src/p*.rs' -- $(MAKE) {{fileBase}}

build-rescript:
	@ cd rescript && ../$(BIN)/bsb -make-world

build-ocaml:
	@ cd ocaml && ../$(BIN)/bsb -make-world

build-rust:
	@ cd rust && wasm-pack --log-level error build --out-dir pkg --dev --target nodejs

p%.js:
	@ node test/index.js $@

p%.res: build-rescript
	@ node test/index.js $@

p%.ml: build-ocaml
	@ node test/index.js $@

p%.rs: build-rust
	@ node test/index.js $@

clean:
	@ rm -rf rescript/lib rescript/.merlin
	@ rm -rf ocaml/lib ocaml/.merlin
	@ rm -rf rust/target rust/pkg rust/Cargo.lock