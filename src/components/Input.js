import React from "react";
import PropTypes from 'prop-types';
import { InputStyle } from '../config/styles'

export default function Input(props) {

  return (
    <InputStyle
      id={props.id}
      type={props.type}
      style={props.style}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
Input.propTypes = {
  size: PropTypes.oneOf('small', 'normal', 'large'),
  stylization: PropTypes.oneOf(['artia']),
  onChange: PropTypes.func,

};