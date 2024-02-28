import { useState } from "react";
import { userSignup } from "../../../Service/api";
import { useNavigate } from "react-router-dom";

const signupInitialValues = {
  fullname: "",
  username: "",
  password: "",
};

function SignUpForm() {
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onValueChange = (evt) => {
    setSignup({ ...signup, [evt.target.name]: evt.target.value });
  };

  const signupUser = async (evt) => {
    evt.preventDefault();
    setSignup(signupInitialValues);
    try {
      const res = await userSignup(signup);
      console.log(res.msg);
      if (res.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      setError(error.msg);
    }
  };
  return (
    <form onSubmit={signupUser}>
      <input
        type="text"
        placeholder="Full name"
        name="fullname"
        value={signup.fullname}
        onChange={onValueChange}
        required
      />
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={signup.username}
        onChange={onValueChange}
        required
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={signup.password}
        onChange={onValueChange}
        required
      />

      <p>{error}</p>
      <button type="submit"> Sign Up</button>
    </form>
  );
}
export default SignUpForm;
