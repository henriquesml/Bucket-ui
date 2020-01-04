import React from "react";
import PropTypes from 'prop-types';
import { ButtonStyle } from '../config/styles'

export default function Button(props) {

	return (
		<ButtonStyle
			style={props.style}
			name={props.name}
			autoFocus={props.autofocus}
			autocomplete={props.autocomplete}
			error={props.error}
			form={props.form}
			formaction={props.formaction}
			formenctype={props.formenctype}
			formmethod={props.formmethod}
			formnovalidate={props.formnovalidate}
			formtarget={props.formtarget}
			type={props.type}
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
  theme: PropTypes.oneOf(['artia', 'fleeg', 'twygo']),
  disabled: PropTypes.bool,	
  onClick: PropTypes.func,
};