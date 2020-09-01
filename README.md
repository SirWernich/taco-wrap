# taco-wrap

![Node.js Package](https://github.com/SirWernich/taco-wrap/workflows/Node.js%20Package/badge.svg)
![Node.js CI](https://github.com/SirWernich/taco-wrap/workflows/Node.js%20CI/badge.svg?branch=master)

A Node.js module that wraps a string in taco emojis (🌮) or gives you a single taco emoji if you passed in a null or empty string.

```sh
npm install taco-wrap --save
yarn add taco-wrap
bower install taco-wrap --save
```

## Usage

### Javascript

```javascript
var tacoWrap = require('taco-wrap');
var wrappedString = tacoWrap('taco ingredients');
```

```sh
Output should be '🌮 taco ingredients 🌮'
```

### TypeScript

```typescript
import tacoWrap from 'taco-wrap';
console.log(tacoWrap('cheese, mince, tomato, guacamole'))
```

```sh
Output should be '🌮 cheese, mince, tomato, guacamole 🌮'

```

### AMD

```javascript
define(function(require,exports,module){
  var tacoWrap = require('taco-wrap');
});
```

## Test

```sh
npm run test
```
