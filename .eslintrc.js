module.exports = {
  root: true,

  env: {
    node: true,
    es2022: true, // 👈 add this
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],

  rules: {
    'max-len': ['warn', 200],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
