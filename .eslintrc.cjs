/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-01 15:32:14
 * @LastEditors: Caroline-JYH 745059996@qq.com
 * @LastEditTime: 2022-09-01 17:23:47
 * @FilePath: \vue-ts\.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  // eslint-disable-next-line no-dupe-keys
  parser: 'vue-eslint-parser',
  // eslint-disable-next-line no-dupe-keys
  parserOptions: { parser: '@typescript-eslint/parser' },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
  }
}
