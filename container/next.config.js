/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container;

    config.plugins.push(
      new ModuleFederationPlugin({
        remotes: {
          products: 'products@http://localhost:8081/remoteEntry.js',
          reactified: 'reactified@http://localhost:8082/remoteEntry.js',
        },
      }),
    );

    return config;
  },

}

module.exports = nextConfig