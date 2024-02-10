import React, {useState} from "react";
import Authentication from "../layouts/Authentication";
import AuthSidebar from "../layouts/AuthSidebar";
import {useNavigate} from "react-router-dom";

function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = () => {
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(isChecked);
    alert("no action here or open the console. go to login page?");
    navigate("/login");
  };

  return (
    <div className="register">
      <div className="register-layout">
        <Authentication
          title="Sign Up"
          description="Create new account and play the game"
          button="Register"
          socialMedia="or continue with social platform"
          marginSocialMedia="2px"
          position={"left"}
          handleUsername={handleUsername}
          handleEmail={handleEmail}
          handlePassword={handlePassword}
          handleCheckbox={handleCheckbox}
          handleSubmit={handleSubmit}
        />
        <AuthSidebar target="/login" position={"right"} />
      </div>
    </div>
  );
}

export default Register;
