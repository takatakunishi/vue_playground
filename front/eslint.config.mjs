import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from "@vue/eslint-config-typescript";

export default [
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  {
    files: ['src/**/*.vue', 'src/**/*.ts'],
  },
  {
    ignores: []
  }
]