import pluginVue from "eslint-plugin-vue";
import vueTsEslintConfig from "@vue/eslint-config-typescript";

export default [
  ...pluginVue.configs["flat/recommended"],
  ...vueTsEslintConfig(),
  {
    rules: {
      "vue/max-lines-per-block": [
        "error",
        {
          skipBlankLines: true, // 空白行を無視する
          script: 100, // scriptタグ内の最大行数
          template: 100, // templateタグ内の最大行数
        },
      ],
    },
  },
  {
    files: ["src/**/*.vue", "src/**/*.ts"],
  },
  {
    ignores: [],
  },
];
