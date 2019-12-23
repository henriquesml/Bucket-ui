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
        <option value='none' selected disabled hidden>Selecione um banco</option>
        <option value='237'>Bradesco (237)</option>
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