import type {TSESLint} from '@typescript-eslint/utils';

export const eslintRules: TSESLint.Linter.RulesRecord = {
    complexity: ['error', {max: 20}],
    // this rule conflicts with switch-exhaustiveness-check and should not be turned on
    // with typescript, this would not become an issue either
    'consistent-return': 'off',
    curly: ['error'],
    // this rule conflicts with switch-exhaustiveness-check and should not be turned on
    'default-case': 'off',
    eqeqeq: ['error', 'always', {null: 'ignore'}],
    'max-classes-per-file': ['error', 1],
    'no-async-promise-executor': ['error'],
    'no-bitwise': ['error'],
    'no-console': ['error'],
    'no-debugger': ['error'],
    'no-dupe-else-if': ['error'],
    'no-duplicate-case': ['error'],
    'no-duplicate-imports': ['error'],
    'no-empty': ['error'],
    'no-eval': ['error'],
    'no-with': ['error'],
    'no-ex-assign': ['error'],
    'no-fallthrough': ['error'],
    'no-invalid-regexp': ['error'],
    'no-misleading-character-class': ['error'],
    'no-new-func': ['error'],
    'no-param-reassign': ['error'],
    'no-promise-executor-return': ['error'],
    'no-self-assign': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-unsafe-finally': ['error'],
    'no-unsafe-negation': ['error'],
    'no-unused-labels': ['error'],
    'no-return-assign': ['error', 'always'],
    'no-script-url': ['error'],
    'no-throw-literal': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-escape': ['error'],
    'no-useless-return': ['error'],
    'no-useless-catch': ['error'],
    'no-var': ['error'],
    'no-lone-blocks': ['error'],
    'no-loop-func': ['error'],
    'no-new': ['error'],
    'no-new-wrappers': ['error'],
    'no-nonoctal-decimal-escape': ['error'],
    'no-octal': ['error'],
    'no-octal-escape': ['error'],
    'no-proto': ['error'],
    'no-implied-eval': ['error'],
    'no-iterator': ['error'],
    'no-caller': ['error'],
    'no-empty-pattern': ['error'],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-useless-backreference': ['error'],
    'no-constant-condition': ['warn'],
    'no-control-regex': ['error'],
    'no-empty-character-class': ['error'],
    'no-inner-declarations': ['error'],
    'no-irregular-whitespace': ['error'],
    'no-prototype-builtins': ['error'],
    'no-regex-spaces': ['error'],
    'no-sparse-arrays': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-compare-neg-zero': ['error'],
    'no-cond-assign': ['error', 'always'],
    'no-nested-ternary': ['error'],
    'no-lonely-if': ['error'],
    'no-shadow-restricted-names': ['error'],
    'no-undef-init': ['error'],
    'no-multi-assign': ['error'],
    'no-multi-str': ['error'],
    'no-useless-computed-key': ['error'],
    'no-case-declarations': ['error'],
    'default-case-last': ['error'],
    'unicode-bom': ['error', 'never'],
    'for-direction': ['error'],
    'block-scoped-var': ['error'],
    'grouped-accessor-pairs': ['error'],
    'guard-for-in': ['error'],
    'object-shorthand': ['error'],
    'prefer-const': ['error'],
    'prefer-promise-reject-errors': ['error'],
    'prefer-numeric-literals': ['error'],
    'prefer-exponentiation-operator': ['error'],
    'prefer-object-spread': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-arrow-callback': [
        'error',
        {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        },
    ],
    'prefer-template': ['error'],
    'symbol-description': ['error'],
    strict: ['error', 'never'],
    yoda: ['error'],
    radix: ['error'],
    'require-yield': ['error'],
    'use-isnan': ['error'],
    'func-style': ['error', 'declaration'],
    'func-names': ['warn'],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    camelcase: [
        'error',
        {
            properties: 'never',
            ignoreDestructuring: false,
            ignoreImports: false,
            ignoreGlobals: false,
        },
    ],
    'new-cap': [
        'error',
        {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptions: [
                'Immutable.Map',
                'Immutable.Set',
                'Immutable.List',
            ],
            properties: true,
        },
    ],
    'no-underscore-dangle': [
        'error',
        {
            allowAfterThis: true,
            allowAfterSuper: false,
            allowAfterThisConstructor: false,
            enforceInMethodNames: false,
            allowFunctionParams: true,
            enforceInClassFields: false,
            allowInArrayDestructuring: true,
            allowInObjectDestructuring: true,
        },
    ],
    'no-else-return': [
        'error',
        {
            allowElseIf: true,
        },
    ],
    'no-restricted-syntax': [
        'error',
        {
            selector: 'LabeledStatement',
            message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
            selector: 'WithStatement',
            message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
    ],
    'no-constructor-return': ['error'],
    'no-magic-numbers': [
        'error',
        {
            ignore: [
                -1, // allow findIndex negative result
                0, // allow initial number value
                1, // allow typical increment
                2, // allow typical divide by half
                10, // allow typical parseInt radix
                1000, // allow typical timestamp divider
            ],
            ignoreDefaultValues: true,
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        },
    ],
    'no-unused-expressions': [
        'error',
        {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
            enforceForJSX: true,
        },
    ],
    'no-restricted-properties': [
        'error',
        {
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee is deprecated',
        },
        {
            object: 'global',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        },
        {
            object: 'self',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        },
        {
            object: 'window',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        },
        {
            object: 'global',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        },
        {
            object: 'self',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        },
        {
            object: 'window',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        },
        {
            property: '__defineGetter__',
            message: 'Please use Object.defineProperty instead.',
        },
        {
            property: '__defineSetter__',
            message: 'Please use Object.defineProperty instead.',
        },
        {
            object: 'Math',
            property: 'pow',
            message: 'Use the exponentiation operator (**) instead.',
        },
    ],
    'no-labels': [
        'error',
        {
            allowLoop: false,
            allowSwitch: false,
        },
    ],
    'no-label-var': ['error'],
    'no-global-assign': [
        'error',
        {
            exceptions: [],
        },
    ],
    'array-callback-return': [
        'error',
        {
            allowImplicit: true,
            checkForEach: false,
        },
    ],
    'no-unreachable-loop': [
        'error',
        {
            ignore: [],
        },
    ],
    'no-unsafe-optional-chaining': [
        'error',
        {
            disallowArithmeticOperators: true,
        },
    ],
    'no-unneeded-ternary': [
        'error',
        {
            defaultAssignment: false,
        },
    ],
    'no-restricted-globals': [
        'error',
        {
            name: 'isFinite',
            message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
        },
        {
            name: 'isNaN',
            message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
        },
        'addEventListener',
        'blur',
        'close',
        'closed',
        'confirm',
        'defaultStatus',
        'defaultstatus',
        'event',
        'external',
        'find',
        'focus',
        'frameElement',
        'frames',
        'history',
        'innerHeight',
        'innerWidth',
        'length',
        'location',
        'locationbar',
        'menubar',
        'moveBy',
        'moveTo',
        'name',
        'onblur',
        'onerror',
        'onfocus',
        'onload',
        'onresize',
        'onunload',
        'open',
        'opener',
        'opera',
        'outerHeight',
        'outerWidth',
        'pageXOffset',
        'pageYOffset',
        'parent',
        'print',
        'removeEventListener',
        'resizeBy',
        'resizeTo',
        'screen',
        'screenLeft',
        'screenTop',
        'screenX',
        'screenY',
        'scroll',
        'scrollbars',
        'scrollBy',
        'scrollTo',
        'scrollX',
        'scrollY',
        'self',
        'status',
        'statusbar',
        'stop',
        'toolbar',
        'top',
    ],
    'getter-return': [
        'error',
        {
            allowImplicit: true,
        },
    ],
    'no-useless-rename': [
        'error',
        {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false,
        },
    ],
    'prefer-regex-literals': [
        'error',
        {
            disallowRedundantWrapping: true,
        },
    ],
};
