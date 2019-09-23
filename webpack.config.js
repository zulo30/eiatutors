const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const resolve = path.resolve.bind(path, __dirname);


module.exports = (env, argv) => {
    let output;
    let bundleTrackerPlugin;
    let extractCssPlugin;
    let fileLoaderPath;
    const vueLoaderPlugin = new VueLoaderPlugin();

    switch (argv.mode) {
        case 'production':
            output = {
                path: resolve('assets/bundles/'),
                filename: 'script-[name].[chunkhash].js',
                chunkFilename: 'script-[name].[id].[chunkhash].js',
                publicPath: 'https://example.com/static/bundles/'
            };
            bundleTrackerPlugin = new BundleTracker({
                filename: 'assets/webpack-bundle.prod.json',
            });
            extractCssPlugin = new MiniCssExtractPlugin({
                filename: 'style-[name].[chunkhash].css',
                chunkFilename: 'style-[name].[id].[chunkhash].css',
            });
            fileLoaderPath = 'file-loader?name=[name].[hash].[ext]';
            break;

        case 'development':
            output = {
                path: resolve('assets/bundles/'),
                filename: 'script-dev-[name].js',
                chunkFilename: 'script-dev-[name].js',
                publicPath: 'http://127.0.0.1:8000/static/bundles/',
            };
            bundleTrackerPlugin = new BundleTracker({
                filename: 'assets/webpack-bundle.dev.json',
            });
            extractCssPlugin = new MiniCssExtractPlugin({
                filename: 'style-dev-[name].css',
                chunkFilename: 'style-dev-[name].css',
            });
            fileLoaderPath = 'file-loader?name=[name].[ext]';
            break;
        default:
            break;
    }

    return {
        mode: argv.mode,
        entry: './assets/index.js',
        output,
        plugins: [
            bundleTrackerPlugin,
            vueLoaderPlugin,
            extractCssPlugin,
        ],
        module: {
            rules: [
                // Scripts
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                // Styles
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                // Fonts
                {
                    test: /\.(eot|otf|ttf|woff|woff2)(\?v=[0-9.]+)?$/,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts',
                    },
                },
                // Images
                {
                    test: /\.(png|svg|jpg)(\?v=[0-9.]+)?$/,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                    },
                },
                // Vue
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                }
            ],
        },
        resolve: {
            alias: { vue: 'vue/dist/vue.js' }
        },
        devtool: 'source-map',
    };
};