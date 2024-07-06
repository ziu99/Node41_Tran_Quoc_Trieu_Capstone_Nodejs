const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

/**
 * @swagger
 * tags:
 *   name: Locations
 *   description: Location management
 */

/**
 * @swagger
 * /locations:
 *   post:
 *     summary: Create a new location
 *     tags: [Locations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ten_vi_tri:
 *                 type: string
 *               tinh_thanh:
 *                 type: string
 *               quoc_gia:
 *                 type: string
 *               hinh_anh:
 *                 type: string
 *     responses:
 *       201:
 *         description: Location created successfully
 *       500:
 *         description: Internal server error
 */
router.post('/', locationController.createLocation);

/**
 * @swagger
 * /locations:
 *   get:
 *     summary: Get all locations
 *     tags: [Locations]
 *     responses:
 *       200:
 *         description: List of all locations
 *       500:
 *         description: Internal server error
 */
router.get('/', locationController.getLocations);

module.exports = router;
