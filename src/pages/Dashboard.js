import React from "react";
import Line from "../components/fragments/Line";
import BoxPlay from "../components/fragments/BoxPlay";
import Profile from "../layouts/Profile";
import {useProfile} from "../utils/ProfileContext";
import AllRoom from "../layouts/AllRoom";

function Dashboard() {
  const {isProfileOpen} = useProfile();

  return (
    <div className="dashboard">
      <div className={`play-zone ${isProfileOpen ? "" : "profile-dashboard-off"}`}>
        <div className="menu-play">
          <BoxPlay value="play vs com" />
          <BoxPlay value="create new room" />
        </div>
        <div style={{margin: "30px 0", display: "flex", justifyContent: "center"}}>
          <Line lineColor="line-black" />
        </div>
        <AllRoom />
      </div>
      <div className={`profile-dashboard ${isProfileOpen ? "" : "displayNone"}`}>
        <Profile />
      </div>
    </div>
  );
}

export default Dashboard;
