import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    js.configs.recommended,
    {
        ignores: [
            'dist/', 'node_modules/', 'build/', 'coverage/'
        ]
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
            }
        },
        ignores: [ 'node_modules', 'dist', 'coverage' ],

        rules: {
            'no-underscore-dangle': [ 'off' ],
            'import/no-extraneous-dependencies': 'off',
            indent: [ 'error', 4 ],
            semi: [ 'error', 'always' ],
            'no-unused-vars': 'off',
            'no-console': 'off',
            'no-var': 'error',

            'max-len': [
                'error', {
                    code: 120
                }
            ],

            quotes: [ 'error', 'single' ],
            'array-bracket-spacing': [ 'error', 'always' ],
            'array-bracket-newline': [
                'error', {
                    'multiline': true,
                    'minItems': 4
                }
            ],

            'object-curly-spacing': [ 'error', 'always' ],
            'object-curly-newline': [
                'error', {
                    'ObjectExpression': {
                        'multiline': true,
                        'consistent': true,
                        'minProperties': 4
                    },
                }
            ],

            'no-multi-spaces': [
                'error',
                {
                    exceptions: {
                        'Property': false,
                        'BinaryExpression': true,
                        'VariableDeclarator': true,
                        'ImportDeclaration': true
                    }
                }
            ],
            'key-spacing': [
                'error', {
                    'mode': 'strict'
                }
            ],
            'no-trailing-spaces': 'error',
            'no-multiple-empty-lines': [
                'error', {
                    max: 1,
                    maxBOF: 1
                }
            ],
        },

    }
]);