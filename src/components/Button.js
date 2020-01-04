import React from "react";
import PropTypes from 'prop-types';
import { ButtonStyle } from '../config/styles'

export default function Button(props) {

	return (
		<ButtonStyle
			style={props.style}
			onClick={props.onClick} 
			disabled={props.disabled} 
			theme={props.theme}
			size={props.size}
		>
			{props.text}
		</ButtonStyle>
	);
}
Button.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  stylization: PropTypes.oneOf(['artia']),
  disabled: PropTypes.bool,	
  onClick: PropTypes.func,
};