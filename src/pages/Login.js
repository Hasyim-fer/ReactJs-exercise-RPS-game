import React from "react";
import Authentication from "../layouts/Authentication";
import {MailOutlined} from "@ant-design/icons";
import AuthSidebar from "../layouts/AuthSidebar";

function Login() {
  return (
    <div className="login">
      <div className="login-layout">
        <AuthSidebar target="/register" />
        <Authentication title="Wellcome Back!" description="We're so excited to see you again!" placeholder1="Email" label1="Input Your Email Address" icon1={<MailOutlined />} button="Login" socialMedia="or Login with social platform" />
      </div>
    </div>
  );
}

export default Login;
