module.exports = {
    root: true,
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
        allowImportExportEverywhere: true,
    },
    plugins: ["jest", "react", "react-hooks"],
    // Later extensions overwrite earlier extensions if there is a conflict
    extends: [
        "plugin:react/recommended",
        "eslint:recommended",
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
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/react-in-jsx-scope": 1,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-use-before-declare": "off",
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
