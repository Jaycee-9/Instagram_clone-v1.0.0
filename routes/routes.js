import { Router } from "express";
import { signupUser, loginUser } from "../controller.js/account-controller.js";
import { userProfile } from "../controller.js/user-controller.js";

import upload from "../Utils/upload.js";

const router = Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);

router.post("/profile", userProfile);

export default router;
