import {Button} from "antd";
import React from "react";

function ButtonIcon(props) {
  return (
    <Button
      className={props.custom === "true" ? "btn-custom" : null}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        margin: "5px",
      }}
      icon={props.icon}
    >
      {props.value}
    </Button>
  );
}

export default ButtonIcon;
