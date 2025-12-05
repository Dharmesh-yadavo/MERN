import { Router } from "express";
import * as authControllers from "../controllers/auth-controller.js";
import { validate } from "../middleware/validate-middleware.js";
import { signUpSchema } from "../validators/auth-validators.js";

const router = Router();

router.route("/").get(authControllers.getHomePage);

router
  .route("/signUp")
  .post(validate(signUpSchema), authControllers.postRegisterPage);

router.route("/login").post(authControllers.postLoginPage);

export const authRouter = router;
