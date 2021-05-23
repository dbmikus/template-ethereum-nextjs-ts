const makeConfig = () => {
  return {
    hooks: {
      "pre-commit": "pretty-quick --staged",
      "pre-push": "./husky.d/pre-push.frontend.sh",
    },
  };
};

module.exports = makeConfig();
