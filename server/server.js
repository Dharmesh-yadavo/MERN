import express from "express";
import router from "./router/auth-router";

const app = express();

app.use("/api/auth", router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is runing at port: ${PORT}`);
});
