import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/context";
import { ProctectedRoutes } from "./Utils/Protected";

//pages
import Login from "./Components/Account/Login/Login";
import Home from "./Components/Home/Home";
import SignUp from "./Components/Account/SignUp/SignUp";
import MainProfile from "./Components/Profile/MainProfile";
import Message from "./Components/DirectMessage/message";
import EditProfile from "./Components/Profile/EditProfile";

const clientId =
  "299800115938-m1fc1e6eapvf9071kue1psepv7o1esdg.apps.googleusercontent.com";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AccountProvider />}>
      <Route
        path="/login"
        element={
          <GoogleOAuthProvider clientId={clientId}>
            <Login />
          </GoogleOAuthProvider>
        }
      />
      <Route element={<ProctectedRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<MainProfile />} />
        <Route path="/direct/indox" element={<Message />} />
        <Route path="/profile/edit" element={<EditProfile />} />
      </Route>
      <Route
        path="/signup"
        element={
          <GoogleOAuthProvider clientId={clientId}>
            <SignUp />
          </GoogleOAuthProvider>
        }
      />
    </Route>
  )
);
