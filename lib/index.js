/**
 * Expose loadImage
 */

module.exports = loadImage

/**
 * loadImage
 */

function loadImage (url) {
  return new Promise(function (resolve, reject) {
    var img = new Image()

    img.src = url
    img.addEventListener('load', resolve)
    img.addEventListener('error', reject)
  })
}
