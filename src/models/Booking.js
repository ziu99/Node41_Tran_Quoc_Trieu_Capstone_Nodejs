const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  ma_phong: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing' },
  ngay_den: Date,
  ngay_di: Date,
  so_luong_khach: Number,
  ma_nguoi_dat: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Booking', BookingSchema);
