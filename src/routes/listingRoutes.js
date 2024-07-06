const express = require('express');
const router = express.Router();
const listingController = require('../controllers/listingController');

/**
 * @swagger
 * tags:
 *   name: Listings
 *   description: Listing management
 */

/**
 * @swagger
 * /listings:
 *   post:
 *     summary: Create a new listing
 *     tags: [Listings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ten_phong:
 *                 type: string
 *               khach:
 *                 type: number
 *               phong_ngu:
 *                 type: number
 *               giuong:
 *                 type: number
 *               phong_tam:
 *                 type: number
 *               mo_ta:
 *                 type: string
 *               gia_tien:
 *                 type: number
 *               may_giat:
 *                 type: boolean
 *               ban_la:
 *                 type: boolean
 *               tivi:
 *                 type: boolean
 *               dieu_hoa:
 *                 type: boolean
 *               wifi:
 *                 type: boolean
 *               bep:
 *                 type: boolean
 *               do_xe:
 *                 type: boolean
 *               ho_boi:
 *                 type: boolean
 *               ban_ui:
 *                 type: boolean
 *               hinh_anh:
 *                 type: string
 *               vi_tri_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Listing created successfully
 *       500:
 *         description: Internal server error
 */
router.post('/', listingController.createListing);

/**
 * @swagger
 * /listings:
 *   get:
 *     summary: Get all listings
 *     tags: [Listings]
 *     responses:
 *       200:
 *         description: List of all listings
 *       500:
 *         description: Internal server error
 */
router.get('/', listingController.getListings);

module.exports = router;
