import React from "react";
import PropTypes from 'prop-types';
import { StatusStyle } from '../config/styles'

export default function Status(props) {
  return (
    <StatusStyle
      style={props.style}
      size={props.size}
      status={props.status}
    >
      <span><img src={props.img} alt={props.alt}/></span>
    </StatusStyle>
  )
}

Status.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  status: PropTypes.oneOf(['success', 'warning', 'error', 'unknown']),
};

//TODO: Criar componente para tag IMG