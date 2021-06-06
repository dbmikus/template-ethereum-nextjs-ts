module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
    },
    plugins: ["jest", "@typescript-eslint", "react", "react-hooks"],
    // Later extensions overwrite earlier extensions if there is a conflict
    extends: [
        "plugin:react/recommended",
        // "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        // Disabled because this causes noise that conflicts with our own prettier
        // configuration
        // "plugin:prettier/recommended",
    ],
    env: {
        browser: true,
        es6: true,
        node: true,
        "jest/globals": true,
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from
        // the extended configs.
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/react-in-jsx-scope": 1,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-use-before-declare": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            { allowExpressions: true },
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/interface-name-prefix": "off",
        // If you see a "missing in props validation" `react/prop-types` error,
        // make sure that you have defined an interface for the props and are also
        // type-annotating the prop arg. For example:
        //
        // ```
        // interface Props {
        //     onCloseClick: () => void
        // }
        //
        // const Component: React.FC<Props> = (props: Props) => { ... }
    },
    settings: {
        react: {
            version: "detect", // React version. "detect" automatically picks the version you have installed.
        },
    },
}
