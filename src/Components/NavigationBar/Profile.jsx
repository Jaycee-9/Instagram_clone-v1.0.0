import defaultUser from "../../public/images/default-user-img.png";
import { AccountContext } from "../../context/context";

import { useContext } from "react";
function Profile() {
  const { user, person } = useContext(AccountContext);
  return (
    <div className="each-icons">
      {person.userPicture ? (
        <img src={person.userPicture} alt="user" />
      ) : (
        <img src={defaultUser} alt="user" />
      )}
      <p>{user.fullname}</p>
    </div>
  );
}

export default Profile;
