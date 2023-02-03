console.log("it is my app.js");

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 8001;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
