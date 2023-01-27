// todo: mentions refactor
// import Color from "color";
// import $Channel from "@root/Mentions/Channel";
// import $Member from "@root/Mentions/Member";
// import $Role from "@root/Mentions/Role";
// import styledOld, { css as cssOld } from "@utils/emotion";
// import { Message_mentions } from "@types";
// export const THEME_COLOR_ACCENT = "#5865f2";
//
// interface Props {
//   color?: string;
//   inline?: boolean;
//   data?: Message_mentions;
// }
//
// const base = (inline: boolean, color: string, clickable: boolean) => cssOld`
//   text-decoration: none;
//   cursor: pointer;
//   font-weight: 500;
//   border-radius: 3px;
//
//   ${
//     inline
//       ? cssOld`
//         color: ${color};
//         &:hover {
//           ${clickable && "text-decoration: underline;"}
//         }
//       `
//       : cssOld`
//         padding: 0 2px;
//         background-color: ${Color(color)
//           .fade(color === THEME_COLOR_ACCENT ? 0.7 : 0.9)
//           .string()};
//         color: ${
//           color === THEME_COLOR_ACCENT
//             ? Color("white").fade(0.2).string()
//             : color
//         } !important;
//         text-decoration: none !important;
//
//         &:hover {
//           ${
//             clickable
//               ? cssOld`
//                 background-color: ${Color(color).fade(0.1).string()};
//                 color: rgba(255, 255, 255, 0.95) !important;
//               `
//               : "cursor: text"
//           }
//         }
//       `
//   };
// `;
//
// export const Mention = styledOld($Member)<Props & Record<string, unknown>>`
//   ${({ theme, color, inline }) =>
//     base(inline, color || theme.colors.accent, false)};
// `;
//
// export const Channel = styledOld($Channel)<Props & Record<string, unknown>>`
//   ${({ theme, inline }) => base(inline, theme.colors.accent, true)};
// `;
//
// interface RoleProps extends Props {
//   everyone?: boolean;
//   data?: Message_mentions;
// }
// export const Role = styledOld($Role)<RoleProps & Record<string, unknown>>`
//   ${({ theme, color, inline }) =>
//     base(inline, color || theme.colors.accent, false)};
// `;
