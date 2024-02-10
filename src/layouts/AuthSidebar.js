import React from "react";
import ButtonIcon from "../components/fragments/ButtonIcon";
import {CodeFilled} from "@ant-design/icons";
import Line from "../components/fragments/Line";
import AboutGame from "../components/fragments/AboutGame";
import AuthPageRedirect from "../components/templates/AuthPageRedirect";
import {Link} from "react-router-dom";

function AuthSidebar(props) {
  const position = props.position;

  return (
    <div className={`auth-sidebar ${props.target === "/login" ? "sidebar-from-left" : "sidebar-from-right"} ${position} ${props.target === "/login" ? "bg-black" : null}`}>
      <div>
        <Link to={"/homepage"}>
          <ButtonIcon custom="true" bgColor={props.target === "/login" ? "orange" : "black"} color={props.target === "/login" ? "black" : "orange"} value="RPS Games" icon={<CodeFilled />} />
        </Link>
        <AboutGame color={props.target === "/login" ? "color-orange" : null} />
      </div>
      <Line lineColor={props.target === "/login" ? "line-orange" : "line-black"} />
      <Link to={props.target}>
        <AuthPageRedirect target={props.target} buttonColor={props.target === "/login" ? "border-orange" : "border-black"} />
      </Link>
    </div>
  );
}

export default AuthSidebar;
