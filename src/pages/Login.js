import React, {useState} from "react";
import Authentication from "../layouts/Authentication";
import AuthSidebar from "../layouts/AuthSidebar";
import {useNavigate} from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (email === undefined && password === undefined) {
      alert("must fill in one of the input fields (or both)");
    } else {
      const accessToken = `${email} ${password}`;
      localStorage.setItem("accessToken", accessToken);
    }
    navigate("/");
  };

  return (
    <div className="login">
      <div className="login-layout">
        <AuthSidebar target="/register" position={"left"} />
        <Authentication
          title="Wellcome Back!"
          description="We're so excited to see you again!"
          button="Login"
          socialMedia="or Login with social platform"
          position={"right"}
          handleSubmit={handleSubmit}
          handleEmail={handleEmail}
          handlePassword={handlePassword}
        />
      </div>
    </div>
  );
}

export default Login;
