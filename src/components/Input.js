import React,{useState} from "react";
import styled from "@emotion/styled";

export default function Input(props) {
    const [value, setValue] = useState('')

    function changeValue(event) {
      setValue(event.target.value)
    }

  return <input
        id={1}
        type="text"
        value={value}
        placeholder={props.placeholder}
        onChange={changeValue.bind(this)}
    />
  ;
}