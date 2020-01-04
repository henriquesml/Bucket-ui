import React from 'react';
import {NavbarStyle} from '../config/styles'

export default function NavBar(props) {

  return (
    <NavbarStyle
      theme={props.theme}
    >
      <div style={{padding: 35}}>
        {props.children}
      </div>
    </NavbarStyle>
  );
}
