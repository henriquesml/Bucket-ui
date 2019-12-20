import React from "react";
import styled from "@emotion/styled";
import { font, primaryColors, shape, hoverColor } from "config/styles";

const Btn = styled.button`
  ${font}; ${primaryColors}; ${shape}; ${hoverColor};
`;

export default function Button({ text }) {
  return <Btn>{text}</Btn>;
}