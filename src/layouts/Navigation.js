import React, {useState} from "react";
import ButtonIcon from "../components/fragments/ButtonIcon";
import {CodeFilled, UserOutlined, LogoutOutlined} from "@ant-design/icons";
import {Avatar, Popover, Space} from "antd";
import {useProfile} from "../utils/ProfileContext";
import {Link, useNavigate} from "react-router-dom";

function Navigation(props) {
  const [popoverVisible, setPopoverVisible] = useState(false);
  // Access the context values using the custom hook
  const {isProfileOpen, toggleProfile} = useProfile();
  const username = props.username;
  const iconProfile = props.icon;
  const navigate = useNavigate();

  const handleClickProfile = () => {
    setPopoverVisible(false);
    toggleProfile();
  };

  const handleClickLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handlePopoverVisibleChange = (open) => {
    setPopoverVisible(open);
  };

  const content = (
    <div className="popover-nav">
      <div className="content-popover" onClick={handleClickProfile}>
        <span>profile</span>
        <UserOutlined />
      </div>
      <div className="content-popover" onClick={handleClickLogout}>
        <span>logout</span>
        <LogoutOutlined />
      </div>
    </div>
  );

  return (
    <div className="navigation-bar">
      <Link to={"/homepage"}>
        <ButtonIcon custom="true" bgColor="transparent" color="orange" value="RPS Games" icon={<CodeFilled />} />
      </Link>
      <ul>
        <li style={{alignSelf: "center", fontSize: "21px", cursor: "default"}}>
          <p>{`${isProfileOpen ? "" : username}`}</p>
        </li>
        <li style={{alignSelf: "center", cursor: "pointer"}}>
          <Space wrap>
            <Popover content={content} trigger="click" open={popoverVisible} onOpenChange={handlePopoverVisibleChange}>
              <div className="nav-icon">
                <Avatar size={60} icon={iconProfile !== undefined ? iconProfile : <UserOutlined />} />
              </div>
            </Popover>
          </Space>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
