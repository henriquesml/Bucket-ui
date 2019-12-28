import React from "react";
import PropTypes from 'prop-types';
import { ButtonStyle } from '../config/styles'

export default function Button({ size, style, onClick, disabled, text, stylization}) {

	return (
		<ButtonStyle
			style={style}
			onClick={onClick} 
			disabled={disabled} 
			stylization={stylization}
			size={size == undefined ? 'normal': size}
		>
			{text}
		</ButtonStyle>
	);
}
Button.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  stylization: PropTypes.oneOf(['artia']),
  disabled: PropTypes.bool,	
  onClick: PropTypes.func,
};