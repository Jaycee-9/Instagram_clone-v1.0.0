import { useContext } from "react";
import Layout from "../NavigationBar/Layout";
import { AccountContext } from "../../context/context";
import defaultUser from "../../public/images/default-user-img.png";

function EditProfile() {
  const { person } = useContext(AccountContext);

  return (
    <Layout>
      <div style={{ marginLeft: "330px", padding: "50px", fontSize: "40px" }}>
        Edit profile
      </div>
      <div className="edit-conatiner">
        <div className="edit-conatiner-img">
          {person.userPicture ? (
            <img src={person.userPicture} alt="user" />
          ) : (
            <img src={defaultUser} alt="user" />
          )}
        </div>
        <div className="edit-conatiner-p">
          <p style={{ fontFamily: "inherit", fontWeight: "800" }}>
            {person.username}
          </p>
          <p>{person.fullname}</p>
        </div>
        <input id="changephoto" type="file" style={{ display: "none" }} />
        <label htmlFor="changephoto">
          <span>
            <h5>Change photo</h5>
          </span>
        </label>
      </div>
    </Layout>
  );
}

export default EditProfile;
