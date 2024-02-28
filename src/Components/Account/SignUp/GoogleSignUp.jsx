import instagram from "../../../public/images/Instagram_logo.png";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function GoogleSignUp() {
  const onLoginSuccess = (res) => {
    const decode = jwtDecode(res.credential);
    console.log(decode);
  };

  const onLoginError = (res) => {
    console.log("login failed", res);
  };
  return (
    <>
      <img src={instagram} alt="logo" />
      <p>Sign up to see photos and videos from your friends.</p>
      <div id="google-auths">
        <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
      </div>
    </>
  );
}

export default GoogleSignUp;
