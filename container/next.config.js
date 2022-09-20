/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';



const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // for a production build you want to set the assetPrefix, not the webpack publicPath
  // this path says that you can find the production files under the following folder wherever your files are (such as AWS S3)
  assetPrefix: isProd ? '/container/latest/' : undefined,
  // see: https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  // The webpack function is executed twice, once for the server and once for the client.
  // This allows you to distinguish between client and server configuration using the isServer property.
  webpack: (config, options) => {
    const domain = process.env.PRODUCTION_DOMAIN;
    const { ModuleFederationPlugin } = options.webpack.container; // Note: should not use vanilla version of ModuleFederationPlugin. Should use https://www.npmjs.com/package/@module-federation/nextjs-mf
    const { dev } = options;

    config.plugins.push(
      new ModuleFederationPlugin({
        remotes: {
          // for a production build, the files for the remote packages can be found under these folders wherever your files are (such as AWS S3)
          products: dev ? 'products@http://localhost:8081/remoteEntry.js' : `products@${domain}/products/latest/remoteEntry.js`,
          reactified: dev ? 'reactified@http://localhost:8082/remoteEntry.js' : `reactified@${domain}/reactified/latest/remoteEntry.js`,
        },
      }),
    );

    return config;
  },

}

module.exports = nextConfig;
