# mem-map [![Build Status](https://travis-ci.org/SamVerschueren/mem-map.svg?branch=master)](https://travis-ci.org/SamVerschueren/mem-map)

> Map to be used with [mem](https://github.com/sindresorhus/mem)

Please note, this is not a ponyfill for [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) although it will use the native `Map`
implementation if available. It is meant to be used with [mem](https://github.com/sindresorhus/mem) in order to support Node 0.10. When used in Node 0.10, it only
implements `get`, `set` and `has`.

## Install

```
$ npm install --save mem-map
```


## Usage

```js
const Map = require('mem-map');
const mem = require('mem');

let i = 0;
const counter = () => ++i;

const memoized = mem(counter, {cache: new Map()});

memoized('foo');
//=> 1

// cached as it's the same arguments
memoized('foo');
//=> 1

// not cached anymore as the arguments changed
memoized('bar');
//=> 2

memoized('bar');
//=> 2
```


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
