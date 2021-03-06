let ExtractTextPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
let path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    performance: {
        hints: false
    },

    entry: {
        'app': 'app/main.ts' // JiT compilation
    },

    output: {
        path: __dirname + '/.dist/web/jit/',
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[id].chunk.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
    },

    devServer: {
        historyApiFallback: true,
        contentBase: __dirname + '/.dist/web/jit/',
        // watchOptions: {
        //     aggregateTimeout: 300,
        //     poll: 1000
        // }
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular-router-loader',
                    'angular2-template-loader',
                    'source-map-loader'
                ]
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.(png|jpg|gif|ico|woff|woff2|ttf|svg|eot)$/,
                loader: 'file-loader?name=assets/[name].[ext]',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" }),
                exclude: [
                    path.resolve(__dirname, "src/app")
                ]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
                include: [
                    path.resolve(__dirname, "src/app")
                ]
            }
        ]
    },

    plugins: [
        new FaviconsWebpackPlugin({
            logo: './src/icon.png',
            prefix: 'assets/'
        }),
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};
