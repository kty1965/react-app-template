import path from 'path';
import webpack from 'webpack';

export default () => ({
  devtool: 'eval',
  context: path.resolve(__dirname, '../'),
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../public/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 8080,
    contentBase: path.join(__dirname, '../src'),
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
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
            plugins: ['react-hot-loader/babel'],
          },
        }],
      },
      {
        test: /\.(css|sass|scss)$/,
        include: path.resolve(__dirname, '../src'),
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
