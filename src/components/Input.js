import React from "react";
import PropTypes from 'prop-types';
import { InputStyle } from '../config/styles'

export default function Input(props) {

  return (
    <InputStyle
      id={props.id}
      type={props.type}
      theme={props.theme}
      style={props.style}
      error={props.error}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
Input.propTypes = {
  size: PropTypes.oneOf('small', 'normal', 'large'),
  theme: PropTypes.oneOf(['artia', 'fleeg']),
  onChange: PropTypes.func,
  error: PropTypes.bool,

};