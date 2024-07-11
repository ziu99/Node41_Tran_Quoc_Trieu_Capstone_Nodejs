const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  ten_phong: { type: String, required: true },
  khach: { type: Number, required: true },
  phong_ngu: { type: Number, required: true },
  giuong: { type: Number, required: true },
  phong_tam: { type: Number, required: true },
  mo_ta: { type: String, required: true },
  gia_tien: { type: Number, required: true },
  may_giat: { type: Boolean, required: true },
  ban_la: { type: Boolean, required: true },
  tivi: { type: Boolean, required: true },
  dieu_hoa: { type: Boolean, required: true },
  wifi: { type: Boolean, required: true },
  bep: { type: Boolean, required: true },
  do_xe: { type: Boolean, required: true },
  ho_boi: { type: Boolean, required: true },
  ban_ui: { type: Boolean, required: true },
  hinh_anh: { type: String, required: true },
  vi_tri_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
});

module.exports = mongoose.model('Listing', ListingSchema);
