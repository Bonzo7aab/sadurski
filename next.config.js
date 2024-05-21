const withNextIntl = require('next-intl/plugin')('./app/i18n.ts');

const nextConfig = {};

module.exports = withNextIntl(nextConfig);