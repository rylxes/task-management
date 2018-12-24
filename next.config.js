const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');
const withImages = require('next-images')
const withTM = require('next-plugin-transpile-modules');


module.exports = withImages(withCSS(withSASS({
    cssModules: true
})));