module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    // 'vue/html-self-closing': [
    //   'error', {
    //     html: {
    //       void: 'always',
    //       normal: 'always',
    //       component: 'always'
    //     },
    //     svg: 'always',
    //     math: 'always',
    //     img: 'always'
    //   }],
    'vue/html-closing-bracket-newline': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    camelcase: 'off'
  }
}
