import {Checkbox} from "antd";
import React from "react";
import {Link} from "react-router-dom";

function TermPolicy(props) {
  return (
    <div className={props.display}>
      <Checkbox onChange={props.handleChange}>
        I agree to the <Link>Terms & Privacy Policy</Link>
      </Checkbox>
    </div>
  );
}

export default TermPolicy;
