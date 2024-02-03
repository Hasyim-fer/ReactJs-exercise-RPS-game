import {Input} from "antd";
import React from "react";

function InputIcon(props) {
  return <Input className="input-custom" size="large" placeholder={props.placeholder} prefix={props.icon} id={props.id} onChange={props.handleChange} value={props.value} />;
}

export default InputIcon;
