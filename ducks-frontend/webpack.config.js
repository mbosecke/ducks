const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

let environment = 'production';
//let environment = 'development';


module.exports = {
    mode: environment,
    devtool: environment === 'production'? false : 'eval-source-map',
    optimization : {
        minimize : true,
        minimizer: [new TerserPlugin()]
    },
    entry : {
        // Our main entry file with polyfills
        app: ['@babel/polyfill', './src/index.js']
    },
    output: {
        filename: 'js/[name]-[chunkhash].js',
        path: path.resolve(__dirname, './build/webpack'),
        publicPath: '/resources/'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    module: {
        rules: [
            {
                // Our Javascript
                test: /\.(js|jsx)$/,
                include: [/src/],
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                // our CSS
                test: /\.css$/,
                include: [/src/],
                exclude: [/node_modules/],
                use: [ // Loaders performed in reverse order

                    // Finally, JS objects converted to inline styles
                    'style-loader',
                    {
                        // First, CSS converted into JS objects
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                // SASS
                test: /\.s[ac]ss$/i,
                use: [ // Loaders performed in reverse order

                    // Finally, JS objects converted to inline styles
                    "style-loader",
                    // CSS converted into JS objects
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                // Handle third party CSS WITHOUT transforming it
                test: /\.css$/,
                include: [/node_modules/],
                exclude: [/src/],
                use: [ // Loaders performed in reverse order

                    // Finally, JS objects converted to inline styles
                    'style-loader',

                    // First, CSS converted into JS objects
                    'css-loader'
                ]
            },
            {
                // Fonts
                test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts/',
                },
            },
            {
                // Images
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
        ]
    },
};