const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    const paths = {
      "@/components": "../src/common/components",
      "@/stores": "../src/common/stores",
      "@/utils": "../src/common/utils",
      "@/layouts": "../src/layouts",
      "@/modules": "../src/modules",
      "@/pages": "../src/pages",
    };

    Object.keys(paths).forEach((p) => {
      config.resolve.alias[p] = path.resolve(__dirname, paths[p]);
    });

    return config;
  },
};
