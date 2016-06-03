
# load-image

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Load an image in the browser to ensure it is available to be rendered immediately

## Installation

    $ npm install @f/load-image

## Usage

```js
var loadImage = require('@f/load-image')

function allImagesLoaded () {
  return Promise.all(
  [].slice.call(document.querySelectorAll('img')).map(img => loadImage(img.getAttribute('src')))
}
```

## API

### loadImage(url)

- `url` - Url of the image you want to load

**Returns:** A promise that resolves when the image is loaded or rejects if an error occurs.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/load-image.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/load-image
[git-image]: https://img.shields.io/github/tag/micro-js/load-image.svg?style=flat-square
[git-url]: https://github.com/micro-js/load-image
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/load-image.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/load-image
