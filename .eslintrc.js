module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // Permitir JSX tanto em arquivos .js quanto em .jsx
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // Não permitir uso de var, converter para let
    'no-var': 'error',
    // Não inserir ponto e vírgula no fim da sentença
    semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
    // Não inserir vírgula após último elemento de arrays e objetos
    'comma-dangle': ['error', 'never'],
    // Identação com dois espaços
    ident: ['error', 2],
    // Permitir tabs para identação
    'no-tabs': ['error', { allowIndentationTabs: true }],
    // Preferir apóstrofo a aspas
    'jsx-quotes': ['error', 'prefer-single'],
    // Liberar uso de spread operator
    'react/jsx-props-no-spreading': [{
      'html': 'ignore',
      'custom': 'ignore',
      'explicitSpread': 'ignore'
    }]
  },
};
