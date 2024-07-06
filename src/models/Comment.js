const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  ma_cong_viec: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing' },
  ma_nguoi_binh_luan: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ngay_binh_luan: Date,
  noi_dung: String,
  sao_binh_luan: Number,
});

module.exports = mongoose.model('Comment', CommentSchema);
