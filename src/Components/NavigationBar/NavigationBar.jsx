import instagram from "../../public/images/Instagram_logo.png";
import { Link } from "react-router-dom";

import More from "./More";
import Profile from "./Profile";
import Create from "./Create";
import HomePage from "./HomePage";
import SearchComponent from "./Search";
import Notifications from "./Notification";
import Messages from "./Messages";
function NavigationBar() {
  return (
    <div className="navigation-bar">
      <div className="nav-img">
        <img src={instagram} alt="logo" />
      </div>

      <div className="icon">
        <Link to="/">
          <HomePage />
        </Link>

        <SearchComponent />

        <Link to="/direct/indox">
          <Messages />
        </Link>

        <Notifications />

        <Create />

        <Link to="/profile">
          <Profile />
        </Link>

        <More />
      </div>
    </div>
  );
}

export default NavigationBar;
