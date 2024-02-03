import React from "react";
import {Input} from "antd";

function InputPassword(props) {
  return <Input.Password id="password" className="input-custom" size="large" placeholder="Password" prefix={props.icon} iconRender={props.iconRender} onChange={props.handleChange} value={props.value} />;
}

export default InputPassword;
