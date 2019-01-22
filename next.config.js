const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const webpack = require('webpack');
const withCSS = require('@zeit/next-css');
const withOptimizedImages = require('next-optimized-images');
const withImages = require('next-images')
const withTM = require('next-plugin-transpile-modules');
const path = require('path');
const glob = require('glob');


const sassConfig = {
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[name]___[hash:base64:5]'
    }
};

const optimizedImagesConfig = {
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    optimizeImagesInDev: false,
    mozjpeg: {
        quality: 80
    },
    optipng: {
        optimizationLevel: 3
    },
    pngquant: false,
    gifsicle: {
        interlaced: true,
        optimizationLevel: 3
    },
    svgo: {
        // enable/disable svgo plugins here
    },
    webp: {
        preset: 'default',
        quality: 75
    }
};

const nextConfiguration = {
    // webpack: (config, {dev}) => {
    //     config.module.rules.push(
    //         {
    //             test: /\.(css|scss)/,
    //             loader: 'css-loader',
    //             options: {
    //                 name: '[path][name].[ext]'
    //             }
    //         }
    //         ,
    //         {
    //             test: /\.s(a|c)ss$/,
    //             use: ['css-loader', 'babel-loader', 'raw-loader',
    //                 {
    //                     loader: 'sass-loader',
    //                     options: {
    //                         includePaths: ['styles', 'node_modules']
    //                             .map((d) => path.join(__dirname, d))
    //                             .map((g) => glob.sync(g))
    //                             .reduce((a, c) => a.concat(c), [])
    //                     }
    //                 }
    //             ]
    //         }
    //     )
    //     return config
    // }
};

module.exports = withPlugins([
    [withSass, sassConfig],
    [withCSS],
    [withImages],
    [optimizedImages, optimizedImagesConfig],
], nextConfiguration);