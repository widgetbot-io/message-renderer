const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@lib": path.resolve(__dirname, "../dist"),
      "@root": path.resolve(__dirname, "../src"),
      "@images": path.resolve(__dirname, "../src/assets/images"),
      "@utils": path.resolve(__dirname, "../src/utils"),
    };
    return config;
  },
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
};
