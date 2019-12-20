import { css } from "@emotion/core";

export const font = css`
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 4px;
`;

export const shape = css`
  border: none;
  outline: 0;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const color = css({
  backgroundColor: '#1f8e83'
})

export const hoverColor = css({
  ':hover': color
})

export const primaryColors = css`
  background: #26a69a;
  color: #FFF;
`;