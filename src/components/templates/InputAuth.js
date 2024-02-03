import React from "react";
import InputPassword from "../fragments/InputPassword";
import Input from "../fragments/Input";

function InputAuth(props) {
  const labelFor = props.labelFor;

  const renderInput = () => {
    if (labelFor === "password") {
      return (
        <>
          <InputPassword icon={props.icon} iconRender={props.iconRender} handleChange={props.handleChange} />
        </>
      );
    } else {
      return (
        <>
          <Input placeholder={props.placeholder} icon={props.icon} id={props.id} handleChange={props.handleChange} />
        </>
      );
    }
  };

  return (
    <div className={props.display}>
      <label htmlFor={labelFor}>{props.label}</label>
      {renderInput()}
    </div>
  );
}

export default InputAuth;
