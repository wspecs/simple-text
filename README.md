# simple-text

![npm](https://img.shields.io/npm/v/simple-text.svg) ![license](https://img.shields.io/npm/l/simple-text.svg) ![github-issues](https://img.shields.io/github/issues/wspecs/simple-text.svg)



![nodei.co](https://nodei.co/npm/simple-text.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/wspecs/simple-text.svg)
![stars](https://img.shields.io/github/stars/wspecs/simple-text.svg)
![forks](https://img.shields.io/github/forks/wspecs/simple-text.svg)

![forks](https://img.shields.io/github/forks/wspecs/simple-text.svg)

![](https://david-dm.org/wspecs/simple-text/status.svg)
![](https://david-dm.org/wspecs/simple-text/dev-status.svg)

## Features

- Parse text with chords

## Usage

```js
const simpleText = require('pkg.name');

const simple = simpleText.simplify('à la mode');
console.log(simple); // a la mode
```

## Install

`npm install --save simple-text`


## Scripts

 - **npm run build** : `rm -rf dist && tsc`
 - **npm run test** : `mocha ./dist/test/*.js`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[@types/node](https://www.npmjs.com/package/@types/node) | ^10.0.2 | ✔
[@types/chai](https://www.npmjs.com/package/@types/chai) | ^4.1.3 | ✔
[@types/mocha](https://www.npmjs.com/package/@types/mocha) | ^5.2.0 | ✔
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^5.1.1 | ✔


## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains TypeScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Wendly Saintil <wendlysaintil@gmail.com> author.url

## License

 - **MIT** : http://opensource.org/licenses/MIT