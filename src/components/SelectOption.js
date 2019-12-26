import React from 'react';
import PropTypes from 'prop-types';

export default function SelectOption(props) {
  return (
    <option 
      value={props.value} 
      selected={props.selected} 
      disabled={props.disabled} 
      hidden={props.hidden}
    >{props.children}</option>
  );
}

SelectOption.propTypes = {
  selected: PropTypes.bool,	
  disabled: PropTypes.bool,	
  hidden: PropTypes.bool,	
};