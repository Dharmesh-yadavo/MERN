import express from "express";
import cors from "cors";
import { authRouter } from "./router/auth-router.js";
import { connectDb } from "./utils/db.js";
import { errorMiddleware } from "./middleware/error-middleware.js";
import { contactRouter } from "./router/contact-route.js";

const app = express();

// handling CORS

const corsOption = {
  origion: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOption));

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is runing at port: ${PORT}`);
  });
});
