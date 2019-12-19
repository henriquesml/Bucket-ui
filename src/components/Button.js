import React from "react";
import styled from "@emotion/styled";
import { font, primaryColors, shape } from "config/styles";

const Btn = styled.button`
  ${font}; ${primaryColors}; ${shape};
`;

export default function Button({ text }) {
  return <Btn>{text}</Btn>;
}