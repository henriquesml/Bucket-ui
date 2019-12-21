import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import PropTypes from 'prop-types';

const pmry = styled.button`
	outline: 0px;
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color:#ffffff;
	border-radius:3px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#495057;
	font-family:Arial;
	font-size:14px;
	padding:10px 25px;
	:hover {
		background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
		background-color:#f6f6f6;
	}
	:active {
		position:relative;
		top:1px;
	}
`;

const artia = styled.button`
	outline: 0px;
	
	background:linear-gradient(to bottom, #00c1b3 5%, #04bdaf 100%);
	background-color:#00c1b3;
	border-radius:3px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#FFF;
	font-family:Arial;
	font-size:14px;
	padding:10px 25px;
	:hover {
		background:linear-gradient(to bottom, #00b6a9 5%, #00b6a9 100%);
		background-color:#f6f6f6;
	}
	:active {
		position:relative;
		top:1px;
	}
`;

const options = {
	primary: pmry,
	artia: artia
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