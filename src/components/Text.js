import React from 'react'
import PropTypes from 'prop-types';
import {TextStyle} from '../config/styles'

export default function Text(props) {
  return (
    <TextStyle 
      style={props.style}
      variant={props.variant}
    >
      {props.children}
    </TextStyle>
  )
}