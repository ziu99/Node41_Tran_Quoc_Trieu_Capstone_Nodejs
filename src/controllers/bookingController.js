const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const { ma_phong, ngay_den, ngay_di, so_luong_khach, ma_nguoi_dat } = req.body;
    const booking = new Booking({ ma_phong, ngay_den, ngay_di, so_luong_khach, ma_nguoi_dat });
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('ma_phong ma_nguoi_dat');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
