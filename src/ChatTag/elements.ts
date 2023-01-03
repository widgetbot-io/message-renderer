import styled from "../ThemeContext";

export const VerifiedBot = styled("svg")<Record<string, unknown>>`
  vertical-align: top;
  width: 15px;
  height: 15px;
  margin-left: -0.25rem;
`;

export const Tag = styled("span")<Record<string, unknown>>`
  margin-left: 4px;
  font-size: 10px;
  text-transform: uppercase;
  height: fit-content;
  border-radius: 3px;
  padding: 1px 4px;
  align-self: center;
  white-space: nowrap;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.accent};
`;
