module.exports = {
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    ['@babel/transform-runtime', { useESModules: true }],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread'
  ]
}
