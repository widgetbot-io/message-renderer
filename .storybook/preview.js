export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const preview = {
  parameters: {
    backgrounds: {
      default: "discord-dark",
      values: [
        {
          name: "discord-dark",
          value: "#424549",
        },
      ],
    },
  },
};

export default preview;
