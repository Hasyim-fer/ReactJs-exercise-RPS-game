import React from "react";
import {Link} from "react-router-dom";

function BoxPlay(props) {
  const value = props.value;
  return (
    <Link>
      <div className="box-play">{value}</div>
    </Link>
  );
}

export default BoxPlay;
