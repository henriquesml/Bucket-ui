import React from "react";
import { css } from "@emotion/core";
import PropTypes from 'prop-types';
import {pmrySelect} from '../config/styles'

const VldOptions = ['primary', 'artia']

export default function Select(props, { size, style, stylization, value, onChange }) {

  return (
    <select
      id={1}
      css={css`${pmrySelect.__emotion_styles[1].styles}`} 
      style={style}
      type="text"
      value={value}
      placeholder={props.placeholder}
      onChange={onChange}
    >
      {props.children}
    </select>
  );
}
Select.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  stylization: PropTypes.oneOf(VldOptions),
  onChange: PropTypes.func,

};
Select.defaultProps = {
	size: 'normal'
};
Select.sizes = {
	small: '11px',
	normal: '13px',
	large: '18px',
};