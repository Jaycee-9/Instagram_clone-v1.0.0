import loginPage from "../../../public/images/loginPage.png";

import "../../../App.css";

//Components
import LoginUser from "./LoginUser";
import SignUpLink from "./SignUpLink";
import AppLink from "./AppLinks";

function Login() {
  return (
    <div className="login-container">
      <div className="login-photo">
        <img src={loginPage} alt="login" />
      </div>
      <div className="login-form">
        <LoginUser />
        <SignUpLink />
        <AppLink />
      </div>
    </div>
  );
}

export default Login;
