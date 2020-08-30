const path = require('path')

module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve,
    alias: {
      '@assets':         path.resolve(__dirname, './src/assets'),
      // components
      '@components':     path.resolve(__dirname, './src/components'),
      '@screens':        path.resolve(__dirname, './src/components/screens/index.ts'),
      '@layouts':        path.resolve(__dirname, './src/components/layouts/index.ts'),
      '@domain/element': path.resolve(__dirname, './src/components/domain/element/index.ts'),
      '@domain/object':  path.resolve(__dirname, './src/components/domain/object/index.ts'),
      '@gui/groups':     path.resolve(__dirname, './src/components/gui/groups/index.ts'),
      '@gui/parts':      path.resolve(__dirname, './src/components/gui/parts/index.ts'),
      // Domain
      '@entity':         path.resolve(__dirname, './src/domain/entity'),
      '@services':       path.resolve(__dirname, './src/domain/services'),
      // redux
      '@redux':          path.resolve(__dirname, './src/redux'),
      // Utils
      '@utils':          path.resolve(__dirname, './src/utils'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  };
  return config
}