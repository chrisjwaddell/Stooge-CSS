const path = require('path')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")


module.exports = {
    entry: {
        main: './src/stooge.js',
        responsive: './src/stooge-responsive.js',
        colors: './src/stooge-colors.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // since there is no JS, just css, ignore the output
        filename: '../rubbish/[name]-ignore.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: (pathData) => {
                return pathData.chunk.name === 'main' ? 'stooge.css' : 'stooge-[name].css';
            },
            //            filename: 'stooge-[name].css'
        }),
        new CleanWebpackPlugin()
    ],

    module: {
        rules: [{
            test: /\.css$/i,
            use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                "css-loader",
            ]
        }],

    },

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                format: {
                    comments: /^\@/
                    // comments: false
                }
    },
    extractComments: true

            }
        ),
            new OptimizeCssAssetsPlugin( {filename: "[name]-opt.css" })
    ],

    },

        mode: 'production',
    // devtool: "source-map",



    //    optimization: {
    // minimize: true,
    //        minimizer: [
    //            new optimizeCss(),
    //        ]
}
