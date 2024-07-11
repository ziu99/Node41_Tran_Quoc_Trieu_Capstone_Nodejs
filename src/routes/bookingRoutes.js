const express = require('express');
const {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking
} = require('../controllers/bookingController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: Booking management endpoints
 */

/**
 * @swagger
 * /bookings:
 *   get:
 *     summary: Get all bookings
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: List of all bookings
 *       500:
 *         description: Server error
 */
router.get('/bookings', getBookings);

/**
 * @swagger
 * /bookings/{id}:
 *   get:
 *     summary: Get booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking data
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.get('/bookings/:id', getBookingById);

/**
 * @swagger
 * /bookings:
 *   post:
 *     summary: Create a new booking
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma_phong:
 *                 type: string
 *               ngay_den:
 *                 type: string
 *                 format: date
 *               ngay_di:
 *                 type: string
 *                 format: date
 *               so_luong_khach:
 *                 type: number
 *               ma_nguoi_dat:
 *                 type: string
 *             example:
 *               ma_phong: '60c72b2f5f1b2c001c8e4e3d'
 *               ngay_den: '2022-07-01'
 *               ngay_di: '2022-07-10'
 *               so_luong_khach: 2
 *               ma_nguoi_dat: '60c72b1f5f1b2c001c8e4e2b'
 *     responses:
 *       201:
 *         description: Booking created successfully
 *       500:
 *         description: Server error
 */
router.post('/bookings', createBooking);

/**
 * @swagger
 * /bookings/{id}:
 *   put:
 *     summary: Update booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma_phong:
 *                 type: string
 *               ngay_den:
 *                 type: string
 *                 format: date
 *               ngay_di:
 *                 type: string
 *                 format: date
 *               so_luong_khach:
 *                 type: number
 *               ma_nguoi_dat:
 *                 type: string
 *             example:
 *               ma_phong: '60c72b2f5f1b2c001c8e4e3d'
 *               ngay_den: '2022-07-05'
 *               ngay_di: '2022-07-15'
 *               so_luong_khach: 3
 *               ma_nguoi_dat: '60c72b1f5f1b2c001c8e4e2b'
 *     responses:
 *       200:
 *         description: Booking updated successfully
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.put('/bookings/:id', updateBooking);

/**
 * @swagger
 * /bookings/{id}:
 *   delete:
 *     summary: Delete booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking deleted successfully
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.delete('/bookings/:id', deleteBooking);

module.exports = router;
