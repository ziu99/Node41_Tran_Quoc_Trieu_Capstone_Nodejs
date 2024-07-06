const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: Booking management
 */

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
 *     responses:
 *       201:
 *         description: Booking created successfully
 *       500:
 *         description: Internal server error
 */
router.post('/', bookingController.createBooking);

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
 *         description: Internal server error
 */
router.get('/', bookingController.getBookings);

module.exports = router;
