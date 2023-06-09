import { createContext, useContext } from "react";
import { APIMessage } from "discord-api-types/v10";
import type { SvgConfig } from "./svgs";

export type PartialSvgConfig = Partial<SvgConfig>;

export interface MessageButtonListOption<SC extends PartialSvgConfig> {
  onClick: () => void;
  icon: keyof SC;
  actionDescription: string;
}

export type Config<SvgConfig extends PartialSvgConfig> = {
  svgUrls?: SvgConfig;
  messageButtons?(message: APIMessage): MessageButtonListOption<SvgConfig>[];
};

export const ConfigContext = createContext<Config<PartialSvgConfig>>({});

export function useConfig() {
  return useContext(ConfigContext);
}
