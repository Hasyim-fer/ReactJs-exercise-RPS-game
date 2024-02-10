import React from "react";

function Button(props) {
  const bgCustom = props.bgCustom;
  const colorCstm = props.colorCstm;
  const classCustom = props.class;

  return (
    <button className={`button ${classCustom}`} style={{backgroundImage: bgCustom, color: colorCstm}} onClick={props.handleClick}>
      {props.title}
    </button>
  );
}

export default Button;
