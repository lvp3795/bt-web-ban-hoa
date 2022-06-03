const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loaihoaSchema = new Schema({
  maloai: {
    type: Number,
  },
  tenloai: {
    type: String,
  },
});

const LoaiHoa = mongoose.model("LoaiHoa", loaihoaSchema, "LoaiHoa");

module.exports = LoaiHoa;
