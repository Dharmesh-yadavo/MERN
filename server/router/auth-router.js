import { Router } from "express";
import * as authControllers from "../controllers/auth-controller.js";

const router = Router();

router.route("/").get(authControllers.getHomePage);

router.route("/register").post(authControllers.getRegisterPage);

router.route("/login").post(authControllers.getLoginPage);

export default router;
