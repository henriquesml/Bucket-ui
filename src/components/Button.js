import React from "react";
import { css } from "@emotion/core";
import PropTypes from 'prop-types';
import { pmryButton, artiaButton } from '../config/styles'

const options = {
	primary: pmryButton,
	artia: artiaButton
}

const VldOptions = ['primary', 'artia']

export default function Button({ size, style, onClick, disabled, text, stylization }) {

	var change = options.primary.__emotion_styles[1].styles

	if (stylization != undefined, VldOptions.includes(stylization)){
		change = options[stylization].__emotion_styles[1].styles
	}
	return (
	<button 
		style={style}
    	css={css`${change} font-size: ${Button.sizes[size]}`} 
	 	onClick={onClick} 
	 	disabled={disabled} 
	 	stylization={stylization}
	>
		{text}
	</button>
	);
}
Button.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  stylization: PropTypes.oneOf(VldOptions),
  disabled: PropTypes.bool,	
  onClick: PropTypes.func,
};
Button.defaultProps = {
	size: 'normal'
};
Button.sizes = {
	small: '11px',
	normal: '13px',
	large: '18px',
};