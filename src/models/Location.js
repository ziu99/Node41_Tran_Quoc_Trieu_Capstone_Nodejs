const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  ten_vi_tri: { type: String, required: true },
  tinh_thanh: { type: String, required: true },
  quoc_gia: { type: String, required: true },
  hinh_anh: { type: String, required: true },
});

module.exports = mongoose.model('Location', LocationSchema);
