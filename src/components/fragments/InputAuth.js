import React from "react";
import {Input} from "antd";

function InputAuth(props) {
  return (
    <>
      <label htmlFor="input">{props.label}</label>
      <Input className={`input-custom ${props.display}`} size="large" placeholder={props.placeholder} prefix={props.icon} id="input" />
    </>
  );
}

export default InputAuth;
