import React, {useState} from "react";
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
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isChecked, setIsChecked] = useState();

  return (
    <div className={`authentication ${props.button === "Register" ? "authbar-from-right" : "authbar-from-left"} ${position}`}>
      <TitleAuth title={props.title} description={props.description} />
      <InputAuth
        display={props.button === "Login" ? "displayNone" : null}
        placeholder="Username"
        label="Input New Username"
        icon={<UserOutlined />}
        labelFor="username"
        id="username"
        handleChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <InputAuth
        placeholder="Email"
        label="Input Your Email Address"
        icon={<MailOutlined />}
        labelFor="email"
        id="email"
        handleChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <InputAuth
        labelFor="password"
        label="Input Your Password"
        icon={<LockOutlined />}
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        handleChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {/* <InputPassword class={props.display} /> */}
      <TermPolicy
        display={props.button === "Login" ? "displayNone" : null}
        handleChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      />
      <Button
        title={props.button}
        handleClick={() => {
          if (username !== undefined) {
            console.log(username);
          }
          console.log(email);
          console.log(password);
          if (isChecked !== undefined) {
            console.log(isChecked);
          }
        }}
      />
      <ForgotPassword display={props.button === "Register" ? "displayNone" : null} />
      <Line />
      <SocialMedia description={props.socialMedia} margin={props.marginSocialMedia} />
    </div>
  );
}

export default Authentication;
