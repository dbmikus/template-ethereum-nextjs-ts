const makeConfig = () => {
    let plugins = ["@babel/proposal-class-properties", "emotion"]
    if (process.env.NODE_ENV !== "production") {
        plugins.push("babel-plugin-typescript-to-proptypes")
    }

    return {
        presets: ["next/babel", "@emotion/babel-preset-css-prop"],
        plugins: plugins,
    }
}

module.exports = makeConfig()
