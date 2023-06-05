import { createContext, useContext } from "react";
import { SvgConfig } from "@root/core/svgs";
import { MessageButtonListOption } from "@root/Message/MessageContainer";
import { APIMessage } from "discord-api-types/v10";

export type PartialSvgConfig = Partial<SvgConfig>;

export type Config<SvgConfig extends PartialSvgConfig> = {
  svgUrls?: SvgConfig;
  messageButtons?(message: APIMessage): MessageButtonListOption<SvgConfig>[];
};

export const ConfigContext = createContext<Config<PartialSvgConfig>>({});

export function useConfig() {
  return useContext(ConfigContext);
}
