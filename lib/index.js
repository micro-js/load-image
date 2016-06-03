/**
 * Expose loadImage
 */

module.exports = loadImage

/**
 * loadImage
 */

function loadImage (url, cb) {
  var img = new Image()

  img.src = url
  img.addEventListener('load', function () { cb() })
  img.addEventListener('error', cb)
}
