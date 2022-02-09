const withBundleAnalyzer = require('@zeit/next-bundle-analyzer'); // eslint-disable-line
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
require('dotenv').config();
const path = require('path');

module.exports = withBundleAnalyzer({
  env: {
    ROOT: __dirname,
  },
  trailingSlash: process.env.BUILD_ENV !== 'local',
  webpack: (config, { isServer, buildId }) => {
    const newConfig = { ...config };

    newConfig.plugins = config.plugins || [];

    newConfig.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    // Graphql file import support
    newConfig.module.rules.push({
      test: /\.graphql$/,
      loader: 'webpack-graphql-loader',
      exclude: /node_modules/,
      options: {
        output: 'string',
      },
    });

    // svg file import support
    newConfig.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'file-loader'],
    });

    // Image file import support (next-images)
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|ico|webp|jp2)$/,
      issuer: {
        // Next.js already handles url() in css/sass/scss files
        test: /\.\w+(?<!(s?c|sa)ss)$/i,
      },
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: 8192,
            fallback: require.resolve('file-loader'),
            publicPath: `/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: false,
          },
        },
      ],
    });

    // Webfont loader support
    newConfig.module.rules.push({
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      exclude: /node_modules/,
    });

    newConfig.plugins.push(
      new webpack.DefinePlugin({
        'process.env.RELEASE': JSON.stringify(buildId),
      })
    );
    if (!isServer) {
      newConfig.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    return newConfig;
  },
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
});
