const path = require('path');
const { ModuleFilenameHelpers } = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|woff2)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(jpeg|jpg|svg|png)$/i,
                type: 'asset/resource'
            }
        ]
    }
};