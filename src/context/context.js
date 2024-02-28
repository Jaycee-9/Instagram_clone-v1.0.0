import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const AccountContext = createContext(null);

const AccountProvider = () => {
  const [user, setUser] = useState();
  const [person, setPerosn] = useState({});
  const [userPicture, setUserPicture] = useState("");

  return (
    <AccountContext.Provider
      value={{
        user,
        setUser,
        person,
        setPerosn,
        userPicture,
        setUserPicture,
      }}
    >
      <Outlet />
    </AccountContext.Provider>
  );
};

export default AccountProvider;
