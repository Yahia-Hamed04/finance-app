const repoName = process.env.NEXT_PUBLIC_PAGES_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath: repoName,
  assetPrefix: repoName,
  images: { unoptimized: true },
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