import React from 'react';
import PropTypes from 'prop-types';
import {NavbarStyle} from '../config/styles'

export default function NavBar(props) {

  return (
    <NavbarStyle
      theme={props.theme}
      style={props.style}
    >
      <div style={{padding: 35}}>
        {props.children}
      </div>
    </NavbarStyle>
  );
}
