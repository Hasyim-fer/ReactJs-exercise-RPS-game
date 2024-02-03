import React from "react";
import Button from "../fragments/Button";

function AuthPageRedirect(props) {
  return (
    <div className="redirect">
      <p className={props.target === "/login" ? "text-orange" : null}>{props.target === "/register" ? "Don't have an account?" : "Already have an account?"}</p>
      <Button class={`btn-auth ${props.buttonColor}`} title={props.target === "/register" ? "Join Us" : "Sign In"} handleClick={props.handleClick} target={props.target} margin={props.margin} />
    </div>
  );
}

export default AuthPageRedirect;
