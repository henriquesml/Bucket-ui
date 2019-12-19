import React,{useState} from "react";
import styled from "@emotion/styled";
import { font, primaryColors, shape } from "config/styles";

const Inpt = styled.button`
  ${font}; ${primaryColors}; ${shape};
`;

export default function Input(props) {
    const [value, setValue] = useState('')

    function changeValue(event) {
        const value = event.target.value;
        this.setState({ value, error: "" })
    }

  return <input
        id={1}
        type="text"
        value={value}
        placeholder={props.placeholder}
        onChange={this.changeValue.bind(this)}
    />
  ;
}