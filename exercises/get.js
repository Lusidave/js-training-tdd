'use strict';

/*
 * Create a `get` function that takes a key and return the corresponding value
 * in the sourceObject
 *
 * @notions Functions, Data-Structures, Get
 */

// Provided code:
const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
};

// Your code:
function get(test) {
  if (test == 'num')
  {return sourceObject.num}
  if (test=='bool')
  {return sourceObject.bool}
  if (test == 'str')
  {return sourceObject.str}
  if (test == 'log')
  {return sourceObject.log}
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof get, 'function');
assert.strictEqual(get('num'), 42);
assert.strictEqual(get('bool'), true);
assert.strictEqual(get('str'), 'some text');
assert.strictEqual(get('log'), console.log);
assert.strictEqual(get('noexist'), undefined);
// End of tests */
