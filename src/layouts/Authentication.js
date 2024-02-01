import React from "react";
import Button from "../components/fragments/Button";
import InputPassword from "../components/fragments/InputPassword";
import InputAuth from "../components/fragments/InputAuth";
import TitleAuth from "../components/fragments/TitleAuth";
import Line from "../components/fragments/Line";
import SocialMedia from "../components/templates/SocialMedia";

function Authentication(props) {
  return (
    <div className="authentication">
      <TitleAuth title={props.title} description={props.description} />
      <InputAuth placeholder={props.placeholder1} label={props.label1} icon={props.icon1} />
      <InputAuth display={props.button === "Login" ? "displayNone" : null} placeholder={props.placeholder2} label={props.label2} icon={props.icon2} />
      <InputPassword />
      <Button title={props.button} />
      <Line />
      <SocialMedia description={props.socialMedia} />
    </div>
  );
}

export default Authentication;
