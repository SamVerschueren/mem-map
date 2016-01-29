# mem-map [![Build Status](https://travis-ci.org/SamVerschueren/mem-map.svg?branch=master)](https://travis-ci.org/SamVerschueren/mem-map)

> Map to be used with [mem](https://github.com/sindresorhus/mem)

Please note that this is **not** a ponyfill for [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). Although it will use the
native `Map` implementation if available. If `Map` is not available, a very lightweight `Map` is offerred which only implements `get`, `set` and `has`. This is just
enough so it can be used with [mem](https://github.com/sindresorhus/mem) if you want to support older Node versions.


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
