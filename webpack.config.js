const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, './src/main.ts')
    },
    output: {
        filename: 'app.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}