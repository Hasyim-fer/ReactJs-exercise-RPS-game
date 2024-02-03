import {Button} from "antd";
import React from "react";

function ButtonIcon(props) {
  let buttonCustom = null;
  if (props.custom) {
    buttonCustom = "btn-custom";
    if (props.bgColor === "black") {
      buttonCustom = buttonCustom + " login";
    } else if (props.bgColor === "orange") {
      buttonCustom = buttonCustom + " register";
    }
    // console.log(buttonCustom);
  }
  return (
    <Button
      className={buttonCustom}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        margin: props.margin ?? "5px",
      }}
      icon={props.icon}
    >
      {props.value}
    </Button>
  );
}

export default ButtonIcon;
