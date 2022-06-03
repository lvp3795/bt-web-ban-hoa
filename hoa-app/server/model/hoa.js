const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hoaSchema = new Schema({
  mahoa: {
    type: Number,
  },
  maloai: {
    type: Number,
  },
  tenhoa: {
    type: String,
  },
  dongia: {
    type: Number,
  },
  hinh: {
    type: String,
  },
  mota: {
    type: String,
  },
});

const Hoa = mongoose.model("Hoa", hoaSchema, "Hoa");

module.exports = Hoa;
