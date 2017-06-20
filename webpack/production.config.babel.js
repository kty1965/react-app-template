import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default () => ({
  devtool: 'source-map',
  context: path.resolve(__dirname, '../'),
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    path: path.resolve(__dirname, '../public/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        include: path.resolve(__dirname, '../src'),
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: true,
            presets: [
              ['es2015', { modules: false }],
              'react',
            ],
            plugins: ['react-hot-loader/babel', 'transform-decorators-legacy'],
          },
        }],
      },
      {
        test: /\.(css|sass|scss)$/,
        include: path.resolve(__dirname, 'src'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', query: { modules: true, sourceMaps: true } },
            { loader: 'sass-loader' },
          ],
        }),
      },
      {
        test: /\.(ttf|eot|svg|mp3)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        query: {
          useRelativePath: process.env.NODE_ENV === 'production',
        },
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[path][name].[ext]&context=./src',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
});
