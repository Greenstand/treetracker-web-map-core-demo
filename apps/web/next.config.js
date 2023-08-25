/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: { icon: true },
          },
        ],
      },
      // png
      {
        test: /\.png$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'static/images/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    );
    return config;
  },
};

module.exports = nextConfig;
