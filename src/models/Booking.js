const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  ma_phong: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true },
  ngay_den: { type: Date, required: true },
  ngay_di: { type: Date, required: true },
  so_luong_khach: { type: Number, required: true },
  ma_nguoi_dat: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Booking', BookingSchema);
