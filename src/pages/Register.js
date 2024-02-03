import React from "react";
import Authentication from "../layouts/Authentication";
import AuthSidebar from "../layouts/AuthSidebar";

function Register() {
  return (
    <div className="register">
      <div className="register-layout">
        <Authentication title="Sign Up" description="Create new account and play the game" button="Register" socialMedia="or continue with social platform" marginSocialMedia="2px" position={"left"} />
        <AuthSidebar target="/login" position={"right"} />
      </div>
    </div>
  );
}

export default Register;
