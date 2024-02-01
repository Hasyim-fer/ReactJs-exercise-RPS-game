import React from "react";
import {Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined} from "@ant-design/icons";
import Link from "antd/es/typography/Link";

function InputPassword() {
  return (
    <>
      <label htmlFor="password">Input Your Password</label>
      <Input.Password id="password" className="input-custom" size="large" placeholder="Password" prefix={<LockOutlined />} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
      <Link>Forgotten Password?</Link>
    </>
  );
}

export default InputPassword;
