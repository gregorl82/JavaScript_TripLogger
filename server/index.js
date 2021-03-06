const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();
require("dotenv").config();

app.use(morgan("tiny"));
app.use(helmet());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
