const mongoose = require("mongoose");
const db = process.env.DB;
mongoose.connect(
  db,
  {
    useNewurlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected Sucessfully");
  }
);
module.exports = mongoose;
