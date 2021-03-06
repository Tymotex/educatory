const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();

module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}
