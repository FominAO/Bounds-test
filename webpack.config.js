const path = require('path');
const webpack = require('webpack');


//plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:  './src/js/app.js',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),

    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',

            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader',
                }),
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
              test: /\.(jpg|png)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'img/',
                    publicPath: 'img/'
                  }
                }
              ]
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin (
            'css/[name].css'
        ),
        new HtmlWebpackPlugin ({
          template: 'src/index.html'
        }),
        new CleanWebpackPlugin (['dist'])
    ],
        
};