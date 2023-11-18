module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    '.eslintrc.cjs',
    'vite.config.ts',
    'node_modules',
    'public',
    'coverage',
    'dist'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'import', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/']
      },
      'typescript': {
        'alwaysTryTypes': true,
        'project': './tsconfig.json',
        'extensions': ['.ts', '.tsx'],
      }
    }
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function'
      }
    ],
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'prettier/prettier': ['error'],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index'
        ]
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.test.tsx',
          'src/tests/**/*',
          'src/setupTests.ts'
        ]
      }
    ]
  },
  overrides: [
    {
      env: {
        jest: true
      },
      files: ['**/?(*.)+(test).ts?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended']
    }
  ]
};
