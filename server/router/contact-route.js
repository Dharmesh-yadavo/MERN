import { Router } from "express";
import { postContactFormPage } from "../controllers/contact-controller.js";

const router = Router();

// Route directly uses the imported function
router.route("/contact").post(postContactFormPage);

export const contactRouter = router;
