const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
             {
                test: /\.(ico|gif|png|jpg|jpeg|svg)$/i,          
                loader: 'file-loader',
                options: {
                    name: (resourcePath, resourceQuery) => {
                        if (/favicon\.ico/.test(resourcePath)) {
                            return '[name].[ext]'
                        }
                        if (/content\/courses/.test(resourcePath)) {
                            return 'content/courses/[name].[ext]'
                        }
                        return '[folder]/[name].[ext]'
                    },
                    outputPath: 'img/',
                    //publicPath: '/img/',
                    publicPath: (url, resourcePath, context) => {
                        if (/\/bg\//.test(resourcePath)) {
                            return `../img/${url}`
                        }
                        return `img/${url}`
                    }
                }
            },
            {
                test: /\.svg$/,
                use: [
                    { loader: 'svg-sprite-loader', options: {
                        extract: true,
                        publicPath: '/',
                        spriteFilename: './img/icons/icons.svg'
                    }
                    }
                ]
            }
        ]
    }
});
