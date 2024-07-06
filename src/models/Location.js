const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  ten_vi_tri: String,
  tinh_thanh: String,
  quoc_gia: String,
  hinh_anh: String,
});

module.exports = mongoose.model('Location', LocationSchema);
