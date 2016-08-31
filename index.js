/**
 * ESLint default configs of freaktechnik.
 *
 * @module eslint-plugin-freaktechnik
 */
"use strict";

module.exports = {
    configs: {
        base: {
            env: {
                es6: true
            },
            parserOptions: {
                ecmaVersion: 6
            },
            plugins: [
                "jsdoc"
            ],
            rules: {
                "jsdoc/check-param-names": 2,
                "jsdoc/check-tag-names": 1,
                "jsdoc/check-types": 2,
                "jsdoc/newline-after-description": 2,
                "jsdoc/require-description-complete-sentence": 2,
                "jsdoc/require-hyphen-before-param-description": 2,
                "jsdoc/require-param": 2,
                "jsdoc/require-param-type": 1,
                "jsdoc/require-param-description": 1,
                "jsdoc/require-returns-type": 1,
                "jsdoc/require-returns-description": 0,
                "valid-jsdoc": 1,
                "block-scoped-var": 2,
                "no-console": [2, {
                    "allow": [ "warn", "error" ]
                }],
                "indent": ["error", 4],
                "array-callback-return": 2,
                "consistent-return": 1,
                "curly": ["error", "all"],
                "default-case": 2,
                "dot-location": [2, "property"],
                "dot-notation": 2,
                "no-caller": 2,
                "no-empty-function": 2,
                "no-eval": 2,
                "no-extra-bind": 2,
                "no-extra-label": 2,
                "no-floating-decimal": 2,
                "no-implied-eval": 2,
                "no-invalid-this": 2,
                "no-iterator": 2,
                "no-multi-spaces": 2,
                "no-proto": 2,
                "no-return-assign": 2,
                "no-script-url": 2,
                "no-self-compare": 2,
                "no-void": 2,
                "no-useless-escape": 2,
                "no-useless-concat": 2,
                "radix": 2,
                "no-use-before-define": 2,
                "yoda": 2,
                "array-bracket-spacing": [2, "always"],
                "block-spacing": 2,
                "brace-style": [2, "stroustrup"],
                "camelcase": 2,
                "comma-spacing": 2,
                "comma-style": 2,
                "computed-property-spacing": 2,
                "consistent-this": [2, "self"],
                "eol-last": 2,
                "key-spacing": 2,
                "keyword-spacing": [2, {
                    "overrides": {
                        "if": { "after": false },
                        "for": { "after": false },
                        "while": { "after": false },
                        "catch": { "after": false },
                        "function": { "after": false },
                        "super": { "after": false },
                        "switch": { "after": false },
                        "with": { "after": false }
                    }
                }],
                "linebreak-style": 2,
                "new-cap": 2,
                "new-parens": 2,
                "no-multiple-empty-lines": 2,
                "no-spaced-func": 2,
                "no-tabs": 2,
                "no-trailing-spaces": 2,
                "no-unneeded-ternary": 2,
                "no-whitespace-before-property": 2,
                "object-curly-spacing": [2, "always"],
                "one-var-declaration-per-line": 2,
                "one-var": 1,
                "operator-linebreak": 2,
                "semi-spacing": 2,
                "semi": 2,
                "space-before-blocks": 2,
                "space-before-function-paren": [2, "never"],
                "no-alert": 2,
                "space-infix-ops": 2,
                "space-unary-ops": 2,
                "arrow-parens": 2,
                "generator-star-spacing": [2, "after"],
                "no-var": 2,
                "object-shorthand": 1,
                "prefer-arrow-callback": 1,
                "prefer-const": 1,
                "no-loop-func": 1,
                "strict": 1
            },
            settings: {
                jsdoc: {
                    tagNamePreference: {
                        augments: "extends"
                    }
                }
            },
            extends: ["eslint:recommended"]
        },
        node: {
            env:  {
                node: true,
                es6: true
            },
            plugins: [
                "node"
            ],
            extends: ["plugin:freaktechnik/base", "plugin:node/recommended"]
        },
        babel: {
            parser: "babel-eslint",
            parserOptions: {
                ecmaVersion: 7,
                sourceType: "module"
            },
            plugins: [
                "babel"
            ],
            rules: {
                "generator-star-spacing": 0,
                "arrow-parens": 0,
                "node/no-unsupported-features": 0,
                "babel/arrow-parens": 1,
                "babel/generator-star-spacing": 1
            },
            extends: "plugin:freaktechnik/node"
        },
        test: {
            plugins: [
                "ava"
            ],
            rules: {
                "jsdoc/check-param-names": 0,
                "jsdoc/check-tag-names": 0,
                "jsdoc/check-types": 0,
                "jsdoc/newline-after-description": 0,
                "jsdoc/require-description-complete-sentence": 0,
                "jsdoc/require-hyphen-before-param-description": 0,
                "jsdoc/require-param": 0,
                "jsdoc/require-param-type": 0,
                "jsdoc/require-param-description": 0,
                "jsdoc/require-returns-type": 0,
                "jsdoc/require-returns-description": 0,
                "one-var": 0
            },
            extends: ["plugin:freaktechnik/babel", "plugin:ava/recommended"]
        },
        browser: {
            parser: "babel-eslint",
            env: {
                node: false,
                es6: true,
                browser: true
            },
            parserOptions: {
                ecmaVersion: 6
            },
            plugins: [
                "babel"
            ],
            rules: {
                "generator-star-spacing": 0,
                "arrow-parens": 0,
                "babel/arrow-parens": 1,
                "babel/generator-star-spacing": 1
            },
            extends: ["plugin:freaktechnik/base"]
        }
    }
};
