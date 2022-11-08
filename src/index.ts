import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import Routes from "./routes";

const APP_PORT = Number(process.env.APP_PORT);

const app = express();

app.use(express.json());

app.listen(APP_PORT, () => {
  console.log(`Project running on ${APP_PORT}`);
  new Routes(app).iniciarRotas();
});
