const path = require("path");

module.exports = {
  stories: ["../src/stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    const paths = {
      "@/components": "../src/common/components",
      "@/stores": "../src/common/stores",
      "@/utils": "../src/common/utils",
      "@/hooks": "../src/common/hooks",
      "@/common": "../src/common",
      "@/layouts": "../src/layouts",
      "@/modules": "../src/modules",
      "@/pages": "../src/pages",
      "@/generated": "../src/generated",
    };

    Object.keys(paths).forEach((p) => {
      config.resolve.alias[p] = path.resolve(__dirname, paths[p]);
    });

    return config;
  },
};
