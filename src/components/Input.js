import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import PropTypes from 'prop-types';

const pmry = styled.button`
  
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color:#ffffff;
	border-radius:3px;
	border: 1px solid #ccc;
  display:inline-block;
  color:#495057;
	font-family:Arial;
	font-size:14px;
  padding:6px 12px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
`;

const VldOptions = ['primary', 'artia']

export default function Input(props, { size, type, style, stylization, id, value, onChange }) {

  return (
    <input
      id={id}
      type={type}
      css={css`${pmry.__emotion_styles[1].styles}`} 
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