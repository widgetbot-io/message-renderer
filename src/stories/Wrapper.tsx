import { ThemeProvider } from "emotion-theming";
import { MessageRendererProvider } from "../index";
import React from "react";
import Color from "color";

const theme = {
  __typename: "ThemeSettings",
  colors: {
    __typename: "ThemeColorSettings",
    primary: "#fff",
    accent: "#5865f2",
    background: "#36393f",
  },
  css: ``,
};

const themeContext = {
  readonly: false,
  guestMode: false,
  singleChannel: true,
  colors: {
    ...theme.colors,
    _primary: Color(theme.colors.primary),
    _background: Color(theme.colors.background),
    _accent: Color(theme.colors.accent),
  },
  loadedSettings: false,
};

function Wrapper(Story) {
  return (
    <ThemeProvider theme={themeContext}>
      <MessageRendererProvider>
        {({ themeClass }) => (
          <div className={themeClass} style={{ padding: 20 }}>
            {Story()}
          </div>
        )}
      </MessageRendererProvider>
    </ThemeProvider>
  );
}

export default Wrapper;
