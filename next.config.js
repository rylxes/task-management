const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');
const withImages = require('next-images')

module.exports = withImages(withCSS(withSASS ({
    cssModules: true
})));