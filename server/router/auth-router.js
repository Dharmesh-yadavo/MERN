import { Router } from "express";
import * as authControllers from "../controllers/auth-controller.js";

const router = Router();

router.route("/").get(authControllers.getHomePage);

router.route("/register").get(authControllers.getRegisterPage);

export default router;
