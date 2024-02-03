import React from "react";
import BtnIcon from "../fragments/ButtonIcon";
import {GithubFilled, GoogleOutlined, LinkedinFilled} from "@ant-design/icons";

function SocialMedia(props) {
  return (
    <div className="social-media">
      <p>{props.description}</p>
      <div>
        <BtnIcon bgColor="#333" color="white" value="GitHub" margin={props.margin} icon={<GithubFilled />} />
        <BtnIcon bgColor="#DB4437" color="white" value="Google" margin={props.margin} icon={<GoogleOutlined />} />
        <BtnIcon bgColor="#0077b5 " color="white" value="Linkedin" margin={props.margin} icon={<LinkedinFilled />} />
      </div>
    </div>
  );
}

export default SocialMedia;
