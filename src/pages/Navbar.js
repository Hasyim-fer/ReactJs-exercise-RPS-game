import React, {useState} from "react";
import Navigation from "../layouts/Navigation";
import {Outlet} from "react-router-dom";

function Navbar() {
  const [username, setUsername] = useState(null);

  return (
    <>
      <Navigation username={username !== null ? username : "username"} />
      <Outlet />
    </>
  );
}

export default Navbar;
