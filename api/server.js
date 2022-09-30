const express = require("express");
const app = express();
const cors=require('cors')
require("dotenv").config();
require("./db/conn.js");
require("./Router/router.js");
require("./userschema/userschema.js");
app.use(express.json());
app.use(cors())


app.get("/", (req, res) => {
  res.send("hello frm the home page");
});
app.use("/", require("./Router/router.js"));

app.listen(8000, () => {
  console.log("port is on 8000");
});
