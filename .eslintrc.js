module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // default
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error'],
    'block-spacing': [2, 'always'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
      imports: 'always-multiline',
      objects: 'always-multiline',
    }],
    curly: ['error', 'all'],
    'default-case': ['error'],
    'eol-last': ['error', 'always'],
    eqeqeq: ['error'],
    'func-call-spacing': ['error', 'never'],
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 2,
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': [2, {
      afterColon: true,
      beforeColon: false,
    }],
    'keyword-spacing': [1, {
      after: true,
      before: true,
    }],
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignorePattern: '\\s*<',
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],
    'new-cap': ['off'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': ['error'],
    'no-duplicate-imports': ['error'],
    'no-else-return': ['error'],
    'no-extra-semi': ['error'],
    'no-fallthrough': ['error'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-undef': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-unreachable': ['error'],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }],
    'no-use-before-define': ['error'],
    'no-useless-return': ['error'],
    'no-whitespace-before-property': ['error'],
    'prefer-const': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'quote-props': ['error', 'as-needed'],
    'require-await': ['error'],
    'require-jsdoc': ['off'],
    'space-infix-ops': ['error'],
    'valid-jsdoc': ['off'],
    'vars-on-top': ['error'],
    // react rules
  },
};
