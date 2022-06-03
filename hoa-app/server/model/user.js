const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

const model = mongoose.model("Userdata", User, "user-data");

module.exports = model;
