const express = require("express");
require("dotenv").config();
const path = require("path");
const mainRouter = require('./routers/index');

const app = express();

app.set("view engine", "ejs");

app.use(express.static('views'));


app.use(mainRouter);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`LIstening on port ${PORT}`);
});

