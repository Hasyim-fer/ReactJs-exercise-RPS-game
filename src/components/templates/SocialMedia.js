import React from "react";
import BtnIcon from "../fragments/ButtonIcon";
import {GithubFilled, GoogleOutlined, LinkedinFilled} from "@ant-design/icons";

function SocialMedia(props) {
  return (
    <div className="social-media">
      <p>{props.description}</p>
      <div>
        <BtnIcon bgColor="#333" color="white" value="GitHub" icon={<GithubFilled />} />
        <BtnIcon bgColor="#DB4437" color="white" value="Google" icon={<GoogleOutlined />} />
        <BtnIcon bgColor="#0077b5 " color="white" value="Linkedin" icon={<LinkedinFilled />} />
      </div>
    </div>
  );
}

export default SocialMedia;
