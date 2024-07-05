import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)",
    "../src/**/*.mdx", "../src/**/*.story.@(ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  webpackFinal: (config) =>{
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    return config
  }
};

export default config;
