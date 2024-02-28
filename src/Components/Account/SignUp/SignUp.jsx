//components

import Footer from "./Footer";
import GoogleSignUp from "./GoogleSignUp";
import SignUpForm from "./SignUpForm";

function SignUp() {
  return (
    <>
      <div className="signup-form">
        <div className="input-field">
          <GoogleSignUp />
          <div className="choice">
            <hr />
            or
            <hr />
          </div>
          <SignUpForm />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default SignUp;
