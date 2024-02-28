import Profile from "./Profile";
import { userProfile } from "../../Service/api";
import { useContext, useEffect } from "react";
import { AccountContext } from "../../context/context";

function MainProfile() {
  const { user, setPerosn } = useContext(AccountContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let userData = await userProfile(user);
        setPerosn(userData.data);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching user profile:", error);
      }
    };

    fetchData();
  }, [user, setPerosn]);

  return <Profile />;
}
export default MainProfile;
