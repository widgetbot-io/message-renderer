/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Settings
// ====================================================

export interface Settings_settings_theme_colors {
  __typename: "ThemeColorSettings";
  primary: string | null;
  accent: string | null;
  background: string | null;
}

export interface Settings_settings_theme {
  __typename: "ThemeSettings";
  css: string | null;
  colors: Settings_settings_theme_colors;
}

export interface Settings_settings {
  __typename: "GuildSettings";
  guestMode: boolean;
  invite: string | null;
  singleChannel: string | null;
  hideSidebar: boolean | null;
  readonly: boolean;
  filesEnabled: boolean;
  isCustomAuthEnabled: boolean;
  theme: Settings_settings_theme | null;
}

export interface Settings {
  settings: Settings_settings;
}

export interface SettingsVariables {
  guild: string;
}
