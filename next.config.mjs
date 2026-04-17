/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  turbopack: {
    rules: {
      '*.svg': {
        as: '*.js',
        loaders: ['@svgr/webpack'],
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig; // DB Password: Whip_Information_Guitar_Tail