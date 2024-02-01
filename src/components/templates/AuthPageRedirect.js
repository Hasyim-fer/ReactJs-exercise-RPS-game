import React from "react";
import Button from "../fragments/Button";

function AuthPageRedirect(props) {
  return (
    <div className="redirect">
      <p>{props.target === "/register" ? "Don't have an account?" : "Already have an account?"}</p>
      <Button class="btn-login" title={props.target === "/register" ? "Join Us" : "Sign In"} target={props.target} />
    </div>
  );
}

export default AuthPageRedirect;
