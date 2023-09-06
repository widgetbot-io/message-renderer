import * as Styles from "../style";
import * as React from "react";
import { APIStickerItem, StickerFormatType } from "discord-api-types/v10";
import Tooltip from "../../Tooltip";
import webpCheck from "../../utils/webpCheck";

interface StickerProps {
  sticker: APIStickerItem;
}

function Sticker(props: StickerProps) {
  return (
    <Tooltip
      overlay={
        <Styles.StickerTooltip>
          <Styles.StickerTooltipIcon width={16} height={16} svg="IconSticker" />{" "}
          {props.sticker.name}
        </Styles.StickerTooltip>
      }
      placement="top"
    >
      {props.sticker.format_type === StickerFormatType.Lottie ? (
        <Styles.LottieStickerWrapper>
          {/* todo: support lottie */}
          {/*<Lottie data={props.sticker.lottieData} width={160} height={160} />*/}
        </Styles.LottieStickerWrapper>
      ) : (
        <Styles.Sticker
          height={160}
          width={160}
          alt={props.sticker.name + " Sticker"}
          src={
            // todo: allow proper custom urls instead of relying on Discord's CDN
            props.sticker.format_type === StickerFormatType.APNG
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
