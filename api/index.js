const express = require("express");
require("dotenv").config();

const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello friend." });
});

app.use("/api/v1", require("./router/routes"));

app.listen(PORT, () => {
  console.log(`My app is listening on port ${PORT}`);
});
