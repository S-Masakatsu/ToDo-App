const path = require('path')

module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve,
    alias: {
      '@css':        path.resolve(__dirname, './src/assets/css'),
      '@components': path.resolve(__dirname, './src/components'),
      '@entity':     path.resolve(__dirname, './src/domain/entity'),
      '@redux':      path.resolve(__dirname, './src/redux'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  };
  return config
}