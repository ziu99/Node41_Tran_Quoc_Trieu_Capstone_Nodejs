const express = require('express');
const {
  createLocation,
  getLocations,
  getLocationById,
  updateLocation,
  deleteLocation
} = require('../controllers/locationController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Locations
 *   description: Location management endpoints
 */

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
 *         description: Server error
 */
router.get('/locations', getLocations);

/**
 * @swagger
 * /locations/{id}:
 *   get:
 *     summary: Get location by ID
 *     tags: [Locations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Location ID
 *     responses:
 *       200:
 *         description: Location data
 *       404:
 *         description: Location not found
 *       500:
 *         description: Server error
 */
router.get('/locations/:id', getLocationById);

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
 *             example:
 *               ten_vi_tri: Ho Chi Minh City
 *               tinh_thanh: Ho Chi Minh
 *               quoc_gia: Vietnam
 *               hinh_anh: image_url
 *     responses:
 *       201:
 *         description: Location created successfully
 *       500:
 *         description: Server error
 */
router.post('/locations', createLocation);

/**
 * @swagger
 * /locations/{id}:
 *   put:
 *     summary: Update location by ID
 *     tags: [Locations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Location ID
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
 *             example:
 *               ten_vi_tri: Ho Chi Minh City
 *               tinh_thanh: Ho Chi Minh
 *               quoc_gia: Vietnam
 *               hinh_anh: image_url
 *     responses:
 *       200:
 *         description: Location updated successfully
 *       404:
 *         description: Location not found
 *       500:
 *         description: Server error
 */
router.put('/locations/:id', updateLocation);

/**
 * @swagger
 * /locations/{id}:
 *   delete:
 *     summary: Delete location by ID
 *     tags: [Locations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Location ID
 *     responses:
 *       200:
 *         description: Location deleted successfully
 *       404:
 *         description: Location not found
 *       500:
 *         description: Server error
 */
router.delete('/locations/:id', deleteLocation);

module.exports = router;
