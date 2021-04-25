const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        open: true,
    },
    module: {
        rules: [           
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
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
            },
        ]
    }
});
