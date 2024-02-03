import React from "react";
import Authentication from "../layouts/Authentication";
import AuthSidebar from "../layouts/AuthSidebar";

function Login() {
  return (
    <div className="login">
      <div className="login-layout">
        <AuthSidebar target="/register" position={"left"} />
        <Authentication title="Wellcome Back!" description="We're so excited to see you again!" button="Login" socialMedia="or Login with social platform" position={"right"} />
      </div>
    </div>
  );
}

export default Login;
