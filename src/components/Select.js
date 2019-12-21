import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import PropTypes from 'prop-types';

const pmry = styled.button`
  
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
    background-color:#FFF;
	border-radius:3px;
	border: 1px solid #ccc;
    color:#495057;
	font-family:Arial;
	font-size:14px;
    padding:6px 12px;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    border-radius: 4;
    width: 400;
    height: 40;
    outline: 50 solid;
    outline-color: '#303f9f';
`;

const VldOptions = ['primary', 'artia']

export default function Select(props, { size, style, stylization, value, onChange }) {

  return (
    <select
      id={1}
      css={css`${pmry.__emotion_styles[1].styles}`} 
      style={style}
      type="text"
      value={value}
      placeholder={props.placeholder}
      onChange={onChange}
    >
        <option value='none' selected disabled hidden>Selecione um banco</option>
        <option value='237'  >Bradesco (237)</option>
        <option value='104'>Caixa Econômica Federal (104)</option>
        <option value='756'>Sicoob (756)</option>
        <option value='001'>Banco do Brasil (001)</option>
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