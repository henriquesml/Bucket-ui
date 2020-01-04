import { css } from "@emotion/core";
import styled from "@emotion/styled";
import themes from '../themes'

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
	font-size:${props => props.size in buttonsize ? buttonsize[props.size] : buttonsize['normal'] };
	padding:10px 25px;
	:hover {
		background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
		background-color:#f6f6f6;
	}
	:active {
		position:relative;
		top:1px;
	}

	${props => props.theme in themes.Button && themes.Button[props.theme]}
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
export const SelectStyle = styled.select`
  
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

export const NavbarStyle = styled.header`
  display: flex;
  width: 100%;  
  height: 10vh;
  background-color: #F9F9F9;
  align-items: center;

  ${props => props.theme in themes.NavBar && themes.NavBar[props.theme]}
`;

export const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.direction != undefined ? props.direction : 'column' };
  width: ${props => props.width};
  height: ${props => props.height};
`;