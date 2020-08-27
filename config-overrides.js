const path = require('path')

module.exports = function override(config, env) {
  config.resolve.alias['@css'] = path.resolve(__dirname, './src/assets/css')
  return config
}