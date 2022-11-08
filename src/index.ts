import * as dotenv from "dotenv";
dotenv.config();

import "./models";

import express from "express";

import Routes from "./routes";
import connection from "./connection";

const APP_PORT = Number(process.env.APP_PORT);

const app = express();

app.use(express.json());

app.listen(APP_PORT, () => {
  try {
    connection.authenticate();
    connection.sync();
    new Routes(app).iniciarRotas();
    console.log(`Project running on ${APP_PORT}`);
  } catch (error) {
    console.log(`Error on start projetct: ${error}`);
  }
});
