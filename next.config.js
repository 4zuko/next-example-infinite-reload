const BASE_PATH = '/base-path'
const ASSET_PREFIX = 'asset-prefix'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: { basePath: BASE_PATH },
  output: 'standalone',
  basePath: BASE_PATH,
  assetPrefix: `${BASE_PATH}/${ASSET_PREFIX}`,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: `/:locale/${ASSET_PREFIX}/_next/:path*`,
          destination: '/_next/:path*',
          locale: false,
        },
      ],
    }
  },
}

module.exports = nextConfig
