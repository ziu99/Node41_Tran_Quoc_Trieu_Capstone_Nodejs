const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  ma_cong_viec: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true },
  ma_nguoi_binh_luan: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ngay_binh_luan: { type: Date, required: true },
  noi_dung: { type: String, required: true },
  sao_binh_luan: { type: Number, required: true },
});

module.exports = mongoose.model('Comment', CommentSchema);
