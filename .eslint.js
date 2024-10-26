// .eslintrc.js

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier' // Asegúrate de que este es el último en la lista
    ],
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        // Puedes añadir reglas personalizadas aquí
        'prettier/prettier': 'error'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};