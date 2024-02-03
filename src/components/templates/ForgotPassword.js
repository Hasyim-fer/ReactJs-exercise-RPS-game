import React from "react";
import {Link} from "react-router-dom";

function ForgotPassword(props) {
  return (
    <div className={`forgot-password ${props.display}`}>
      <Link to={"/forgot-password"}>Forgot password?</Link>
    </div>
  );
}

export default ForgotPassword;
