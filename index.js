"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router");
const { sequelize } = require("./models/index");
// const PORT = process.env.PORT;
const URL = process.env.SERVER_URL;
const CLIENT_URL = process.env.CLIENT_URL;

const corsConfig = {
  origin: CLIENT_URL,
  credentials: true,
};
app.use(express.static('public'))
app.use(cors(corsConfig));
app.use(express.json());
app.use(router);

(async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server running at ${URL}:${PORT} 🚀`); // eslint-disable-line no-console
    });
  } catch (e) {
    console.error("Error connecting to the db 😢", e); // eslint-disable-line no-console
  }
})();
