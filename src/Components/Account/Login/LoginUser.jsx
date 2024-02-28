import instagram from "../../../public/images/Instagram_logo.png";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { AccountContext } from "../../../context/context";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../../Service/api";

const loginInitialValues = {
  username: "",
  password: "",
};

function LoginUser() {
  const [login, setLogin] = useState(loginInitialValues);
  const navigate = useNavigate();
  const { setUser, user } = useContext(AccountContext);

  const [error, setError] = useState(null);

  const onInputChange = (evt) => {
    setLogin({ ...login, [evt.target.name]: evt.target.value });
  };

  const loginUser = async (evt) => {
    evt.preventDefault();
    setLogin(loginInitialValues);
    try {
      const res = await userLogin(login);

      sessionStorage.setItem("accessToken", `Bearer ${res.accessToken}`);
      sessionStorage.setItem("refreshToken", `Bearer ${res.refreshToken}`);
      setUser({ username: res.username, fullname: res.fullname });
    } catch (error) {
      setError(error.msg);
    }
  };

  const onLoginSuccess = (res) => {
    const decode = jwtDecode(res.credential);
    setUser(decode);
  };

  const onLoginError = (res) => {
    console.log("login failed", res);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div>
      <img
        src={instagram}
        alt="login-form-logo"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      />
      <form onSubmit={loginUser}>
        <input
          type="text email"
          placeholder="username"
          name="username"
          value={login.username}
          onChange={onInputChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          autoComplete="new-password"
          value={login.password}
          onChange={onInputChange}
          required
        />

        <button type="submit">Log in</button>
      </form>
      <div className="choice">
        <hr />
        or
        <hr />
      </div>

      <div id="google-auths">
        <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
      </div>
      <div className="error">
        <p>{error}</p>
      </div>
    </div>
  );
}
export default LoginUser;
