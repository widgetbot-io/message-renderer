import Tooltip from "@root/Tooltip";
import StickerIcon from "@images/discordAssets/sticker-icon.svg";
import Lottie from "@root/Content/Sticker/Lottie";
import webpCheck from "@utils/webpCheck";
import * as Styles from "../style";
import * as React from "react";
import { Message_stickers } from "@types";

interface StickerProps {
  sticker: Message_stickers;
}

function Sticker(props: StickerProps) {
  return (
    <Tooltip
      overlay={
        <Styles.StickerTooltip>
          <Styles.StickerTooltipIcon src={StickerIcon} alt="" />{" "}
          {props.sticker.name}
        </Styles.StickerTooltip>
      }
      placement="top"
    >
      {props.sticker.formatType === "LOTTIE" ? (
        <Styles.LottieStickerWrapper>
          <Lottie data={props.sticker.lottieData} width={160} height={160} />
        </Styles.LottieStickerWrapper>
      ) : (
        <Styles.Sticker
          height={160}
          width={160}
          alt={props.sticker.name + " Sticker"}
          src={
            // todo: allow proper custom urls instead of relying on Discord's CDN
            props.sticker.formatType === "APNG"
              ? `https://cdn.discordapp.com/stickers/${props.sticker.id}.png`
              : webpCheck(
                  `https://media.discordapp.net/stickers/${props.sticker.id}.webp?size=240`
                )
          }
          draggable={false}
        />
      )}
    </Tooltip>
  );
}

export default Sticker;
