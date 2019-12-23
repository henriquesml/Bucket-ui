import React from "react";
import { css } from "@emotion/core";
import PropTypes from 'prop-types';
import { pmryInput } from '../config/styles'

const VldOptions = ['primary', 'artia']

export default function Input(props, { size, type, style, stylization, id, value, onChange }) {

  return (
    <input
      id={id}
      type={type}
      css={css`${pmryInput.__emotion_styles[1].styles}`} 
      style={style}
      value={value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
Input.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  stylization: PropTypes.oneOf(VldOptions),
  onChange: PropTypes.func,

};
Input.defaultProps = {
	size: 'normal'
};
Input.sizes = {
	small: '11px',
	normal: '13px',
	large: '18px',
};