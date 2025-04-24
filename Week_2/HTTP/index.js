const express = require("express");
const app = express();
const port = 3000;

//fs.readFile("poath","utf-7",())
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
