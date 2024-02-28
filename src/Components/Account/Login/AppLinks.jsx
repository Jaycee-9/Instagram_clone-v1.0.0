import googleIcon from "../../../public/images/google.png";
import apple from "../../../public/images/apple.png";
import { Link } from "react-router-dom";
function AppLink() {
  return (
    <div className="applinks">
      <p>Get the app</p>
      <Link to="https://apps.apple.com/us/app/instagram/id389801252?vt=lo">
        <img src={apple} alt="app link apple" id="app-icon" />
      </Link>
      <Link to="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D0C826C21-17C3-444A-ABB7-EBABD37214D7%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1">
        <img src={googleIcon} alt="app link google" id="app-icon" />
      </Link>
    </div>
  );
}

export default AppLink;
