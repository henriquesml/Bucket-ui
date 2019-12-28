import { css } from "@emotion/core";
import styled from "@emotion/styled";

/* Botões */
const buttonsize = {
	small: '12px',
	normal: '14px',
	large: '18px',
}
export const ButtonStyle = styled.button`
	outline: 0px;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color:#ffffff;
	border-radius:3px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#495057;
	font-family:Arial;
	font-size:${props => !isNaN(buttonsize[props.size]) ? buttonsize[props.size] : buttonsize['normal'] };
	padding:10px 25px;
	:hover {
		background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
		background-color:#f6f6f6;
	}
	:active {
		position:relative;
		top:1px;
	}

	${props => props.stylization == 'artia' && 
	css`
	background:linear-gradient(to bottom, #00c1b3 5%, #04bdaf 100%);
	background-color:#00c1b3;
	color:#FFF;
	:hover {
		background:linear-gradient(to bottom, #00b6a9 5%, #00b6a9 100%);
		background-color:#f6f6f6;
	}
	`
	}
`;

/* Inputs */
export const InputStyle = styled.input`
  
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

/* Selects */
export const pmrySelect = styled.button`
  
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