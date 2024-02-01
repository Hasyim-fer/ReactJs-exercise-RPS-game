import React from "react";
import {CodeFilled} from "@ant-design/icons";
import {Button} from "antd";

function Logo() {
  return (
    <div className="logo">
      <Button className="btn-custom" type="primary" icon={<CodeFilled />}>
        RPS Games
      </Button>
    </div>
  );
}

export default Logo;
