import { Router } from "express";
import { postContactFormPage } from "../controllers/contact-controller.js";

const contactRouter = Router();

// Route directly uses the imported function
contactRouter.route("/contact").post(postContactFormPage);

export default contactRouter;
