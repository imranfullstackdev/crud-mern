const mongoose = require("mongoose");

const user =new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});
const USER = mongoose.model("merncurd", user);
module.exports = USER;
