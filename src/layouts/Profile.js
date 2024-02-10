import React from "react";
import {useProfile} from "../utils/ProfileContext";
import {UserOutlined, HistoryOutlined} from "@ant-design/icons";
import {Avatar} from "antd";
import ButtonIcon from "../components/fragments/ButtonIcon";
import {Link} from "react-router-dom";

function Profile(props) {
  const username = props.username;
  const email = props.email;
  const fullname = props.fullname;
  const birthDay = props.birthDay;
  // Access the context values using the custom hook
  const {toggleProfile} = useProfile();

  return (
    <div className="profile-bar profile-open">
      <button
        className="btn-profile"
        onClick={() => {
          toggleProfile();
        }}
      >
        X
      </button>
      <div className="profile-wrap">
        <div className="avatar">
          <Avatar size={200} icon={props.icon !== undefined ? props.icon : <UserOutlined />} />
        </div>
        <div className="profile-info">
          <div>
            <h1>{username !== undefined ? username : "username"}</h1>
          </div>
          <div className="user-info">
            <div className="title">
              <h4>email</h4>
              <h4>fullname</h4>
              <h4>birth day</h4>
            </div>
            <div className="value">
              <p>: {email !== undefined ? email : "not set"}</p>
              <p>: {fullname !== undefined ? fullname : "not set"}</p>
              <p>: {birthDay !== undefined ? birthDay : "not set"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-history">
        <Link to={"/game-histories"}>
          <ButtonIcon icon={<HistoryOutlined />} value="User Game Histories" bgColor="brown" color="white" />
        </Link>
      </div>
    </div>
  );
}

export default Profile;
