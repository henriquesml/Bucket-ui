import React from 'react';
import {ContainerStyle} from '../config/styles'

export default function Container(props) {
  return (
    <ContainerStyle 
      style={{backgroundColor: props.color}}
      width={props.width}
      height={props.height}
    >
        {props.children}
    </ContainerStyle>
  );
}
