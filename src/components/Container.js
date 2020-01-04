import React from 'react';
import PropTypes from 'prop-types';
import {ContainerStyle} from '../config/styles'

export default function Container(props) {
  return (
    <ContainerStyle 
      style={props.style}
      width={props.width}
      height={props.height}
      direction={props.direction}
    >
        {props.children}
    </ContainerStyle>
  );
}
