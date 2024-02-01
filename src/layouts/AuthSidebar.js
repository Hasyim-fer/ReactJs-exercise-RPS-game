import React from "react";
import ButtonIcon from "../components/fragments/ButtonIcon";
import {CodeFilled} from "@ant-design/icons";
import Line from "../components/fragments/Line";
import AboutGame from "../components/fragments/AboutGame";
import AuthPageRedirect from "../components/templates/AuthPageRedirect";
import {Link} from "react-router-dom";

function AuthSidebar(props) {
  return (
    <div className="auth-sidebar">
      <div>
        <Link to={"/home"}>
          <ButtonIcon bgColor="black " color="orange" custom="true" value="RPS Games" icon={<CodeFilled />} />
        </Link>
        <AboutGame />
      </div>
      <Line />
      <AuthPageRedirect target={props.target} />
    </div>
  );
}

export default AuthSidebar;
