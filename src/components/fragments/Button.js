import React from "react";
import {Link} from "react-router-dom";

function Button(props) {
  const bgCustom = props.bgCustom;
  const colorCstm = props.colorCstm;
  const classCustom = props.class;

  return (
    <Link to={props.target}>
      <button className={`button ${classCustom}`} style={{backgroundColor: bgCustom, color: colorCstm}} onClick={props.handleClick}>
        {props.title}
      </button>
    </Link>
  );
}

export default Button;
