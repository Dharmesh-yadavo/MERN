import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  res.status(200).send("Welcome to the world best MERN series");
});

export default router;
