import { useContext } from "react";
import { AccountContext } from "../../context/context";
import defaultUser from "../../public/images/default-user-img.png";
import Layout from "../NavigationBar/Layout";
import { Link } from "react-router-dom";

function Profile() {
  const { person } = useContext(AccountContext);

  return (
    <Layout>
      <div className="person-stats">
        <div className="person-stats-img">
          {person.userPicture ? (
            <img src={person.userPicture} alt="user" />
          ) : (
            <img src={defaultUser} alt="user" />
          )}
        </div>
        <div className="person-stats-details">
          <div className="person-stats-toprow">
            <p>{person.username}</p>
            <Link to="/profile/edit">
              <button>Edit Profile</button>
            </Link>
          </div>
          <div className="person-stats-midrow">
            <p>
              <span>
                {Array.isArray(person.followers) ? person.followers.length : 0}
              </span>
              Followers
            </p>
            <p>
              <span>
                {Array.isArray(person.following) ? person.following.length : 0}
              </span>
              Following
            </p>
          </div>
          <div className="person-stats-lastrow">
            <h3>{person.fullname}</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Profile;
