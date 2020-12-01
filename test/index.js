const fs = require('fs')
const path = require('path')
const assert = require('assert/strict')
const { performance } = require('perf_hooks')

const prettyMs = require('pretty-ms')
const chalk = require('chalk')

const wasm = require('../rust/pkg/project_euler_rust')
const solutions = require('./solutions')
const { pad } = require('./utils')

const file = process.argv[2]

if (file) testOne(file)
else testAll()

function testAll() {
  Object.keys(solutions).forEach((id) => {
    testJs(id)
    testRes(id)
    testMl(id)
    testRs(id)
  })
}

function testOne(file) {
  const [id, ext] = file.split('.')
  const onError = () => console.log('Problem not yet solved')
  if (ext === 'js') testJs(id, onError)
  else if (ext === 'res') testRes(id, onError)
  else if (ext === 'ml') testMl(id, onError)
  else if (ext === 'rs') testRs(id, onError)
  else console.log('Language not supported')
}

function testJs(id, onError) {
  const file = `../javascript/${id}.js`
  if (fs.existsSync(path.join(__dirname, file))) {
    const solve = require(file)[id]
    test(id, 'javascript', solve)
  } else onError?.()
}

function testRes(id, onError) {
  const file = `../rescript/lib/js/src/${id}.bs.js`
  if (fs.existsSync(path.join(__dirname, file))) {
    const solve = require(file)[id]
    test(id, 'rescript', solve)
  } else onError?.()
}

function testMl(id, onError) {
  const file = `../ocaml/lib/js/src/${id}.bs.js`
  if (fs.existsSync(path.join(__dirname, file))) {
    const solve = require(file)[id]
    test(id, 'ocaml/js', solve)
  } else onError?.()
}

function testRs(id, onError) {
  const solve = wasm[id]
  if (solve) test(id, 'rust/wasm', solve)
  else onError?.()
}

function test(id, lang, solve) {
  process.stdout.write(`${pad(id, 5)} ${pad(lang, 11)} `)
  try {
    const t0 = performance.now()
    const actual = solve()
    const ms = performance.now() - t0
    assert.equal(actual, solutions[id])

    const badge = chalk.green('PASS')
    const color = ms > 60_000 ? 'red' : 'white'
    const time = chalk[color](prettyMs(ms, { millisecondsDecimalDigits: 3 }))
    console.log(`${badge}  ${time}`)
  } catch (error) {
    if (error.code === 'ERR_ASSERTION') console.log(chalk.red('FAIL'))
    else console.log(error)
  }
}
