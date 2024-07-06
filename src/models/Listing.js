const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  ten_phong: String,
  khach: Number,
  phong_ngu: Number,
  giuong: Number,
  phong_tam: Number,
  mo_ta: String,
  gia_tien: Number,
  may_giat: Boolean,
  ban_la: Boolean,
  tivi: Boolean,
  dieu_hoa: Boolean,
  wifi: Boolean,
  bep: Boolean,
  do_xe: Boolean,
  ho_boi: Boolean,
  ban_ui: Boolean,
  hinh_anh: String,
  vi_tri_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
});

module.exports = mongoose.model('Listing', ListingSchema);
