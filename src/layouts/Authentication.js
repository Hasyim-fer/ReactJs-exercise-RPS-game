import React from "react";
import Button from "../components/fragments/Button";
import {MailOutlined, LockOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import TitleAuth from "../components/fragments/TitleAuth";
import Line from "../components/fragments/Line";
import SocialMedia from "../components/templates/SocialMedia";
import TermPolicy from "../components/templates/TermPolicy";
import InputAuth from "../components/templates/InputAuth";
import ForgotPassword from "../components/templates/ForgotPassword";

function Authentication(props) {
  const position = props.position;

  return (
    <div className={`authentication ${props.button === "Register" ? "authbar-from-right" : "authbar-from-left"} ${position}`}>
      <TitleAuth title={props.title} description={props.description} />
      <InputAuth display={props.button === "Login" ? "displayNone" : null} placeholder="Username" label="Input New Username" icon={<UserOutlined />} labelFor="username" id="username" handleChange={props.handleUsername} />
      <InputAuth placeholder="Email" label="Input Your Email Address" icon={<MailOutlined />} labelFor="email" id="email" handleChange={props.handleEmail} />
      <InputAuth labelFor="password" label="Input Your Password" icon={<LockOutlined />} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} handleChange={props.handlePassword} />
      {/* <InputPassword class={props.display} /> */}
      <TermPolicy display={props.button === "Login" ? "displayNone" : null} handleChange={props.handleCheckbox} />
      <Button title={props.button} handleClick={props.handleSubmit} />
      <ForgotPassword display={props.button === "Register" ? "displayNone" : null} />
      <Line />
      <SocialMedia description={props.socialMedia} margin={props.marginSocialMedia} />
    </div>
  );
}

export default Authentication;
