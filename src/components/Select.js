import React from "react";
import PropTypes from 'prop-types';
import { SelectStyle } from '../config/styles'

export function Select(props) {

  return (
    <SelectStyle
      id={props.id}
      theme={props.theme}
      style={props.style}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    >
      {props.children}
    </SelectStyle>
  );
}
Select.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  theme: PropTypes.oneOf(['primary', 'artia']),
  onChange: PropTypes.func,

};

export function Option(props) {
  return (
    <option 
      defaultValue={props.defaultValue}
      value={props.value} 
      selected={props.selected} 
      disabled={props.disabled} 
      hidden={props.hidden}
    >{props.children}</option>
  );
}

Option.propTypes = {
  selected: PropTypes.bool,	
  disabled: PropTypes.bool,	
  hidden: PropTypes.bool,	
};