const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CleanCssLoader = require('clean-css-loader')
const RemovePlugin = require('remove-files-webpack-plugin');

/* This generates the un-minified CSS production code.
 * It needs to run after the CSS minify code is generated because
 * a 'rubbish' directory is created, this removes that directory.
 * The first script also clears the 'dist' directory, this script doesn't.
 * It uses clean-css-loader to remove comments out of
 * CSS code and keep only license comments. It beautifies as well
 * It doesn't minify..
 */

module.exports = {
    entry: {
        main: './src/stooge.js',
        responsive: './src/stooge-responsive.js',
        colors: './src/stooge-colors.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '../rubbish/[name].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: (pathData) => {
                return pathData.chunk.name === 'main' ? 'stooge.css' : 'stooge-[name].css'
            },
        }),
        new RemovePlugin({
            after: {
                include: ['./rubbish']
            }
        })
        // new CleanWebpackPlugin()
    ],

    module: {
        rules: [{
            test: /\.css$/i,
            use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                "css-loader",
                {
                    loader: "clean-css-loader",
                    options: {
                        disable: false,
                        skipWarn: false,
                        sourceMap: false,
                        format: 'beautify',
                        level: {
                            1: {
                                specialComments: true,
                            },
                        }
                    },
                }
            ]
        }],

    },

    mode: 'production',
}
