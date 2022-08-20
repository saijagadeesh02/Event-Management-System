const express = require("express");
const app = express();
const port = 3000;

app.get("/getData", (req, res) => {
  res.send("E-M-S!!");
});

app.post("/createProfile", (req, res) => {});

app.listen(port, () => {
  console.log(`EMS App is listening on port-${port}`);
});
