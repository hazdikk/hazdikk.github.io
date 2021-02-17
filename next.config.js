const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/hazdikk/hazdikk.github.io/gh-pages/' : '',
}