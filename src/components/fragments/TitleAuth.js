import React from "react";

function TitleAuth(props) {
  return (
    <div className="header-authentication">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default TitleAuth;
