const express = require('express');
const {
  createListing,
  getListings,
  getListingById,
  updateListing,
  deleteListing
} = require('../controllers/listingController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Listings
 *   description: Listing management endpoints
 */

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
 *         description: Server error
 */
router.get('/listings', getListings);

/**
 * @swagger
 * /listings/{id}:
 *   get:
 *     summary: Get listing by ID
 *     tags: [Listings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Listing ID
 *     responses:
 *       200:
 *         description: Listing data
 *       404:
 *         description: Listing not found
 *       500:
 *         description: Server error
 */
router.get('/listings/:id', getListingById);

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
 *             example:
 *               ten_phong: Beautiful Beach House
 *               khach: 4
 *               phong_ngu: 2
 *               giuong: 2
 *               phong_tam: 2
 *               mo_ta: A beautiful house by the beach
 *               gia_tien: 200
 *               may_giat: true
 *               ban_la: true
 *               tivi: true
 *               dieu_hoa: true
 *               wifi: true
 *               bep: true
 *               do_xe: true
 *               ho_boi: true
 *               ban_ui: true
 *               hinh_anh: image_url
 *               vi_tri_id: '60c72b2f5f1b2c001c8e4e3d'
 *     responses:
 *       201:
 *         description: Listing created successfully
 *       500:
 *         description: Server error
 */
router.post('/listings', createListing);

/**
 * @swagger
 * /listings/{id}:
 *   put:
 *     summary: Update listing by ID
 *     tags: [Listings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Listing ID
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
 *             example:
 *               ten_phong: Beautiful Beach House
 *               khach: 4
 *               phong_ngu: 2
 *               giuong: 2
 *               phong_tam: 2
 *               mo_ta: A beautiful house by the beach
 *               gia_tien: 200
 *               may_giat: true
 *               ban_la: true
 *               tivi: true
 *               dieu_hoa: true
 *               wifi: true
 *               bep: true
 *               do_xe: true
 *               ho_boi: true
 *               ban_ui: true
 *               hinh_anh: image_url
 *               vi_tri_id: '60c72b2f5f1b2c001c8e4e3d'
 *     responses:
 *       200:
 *         description: Listing updated successfully
 *       404:
 *         description: Listing not found
 *       500:
 *         description: Server error
 */
router.put('/listings/:id', updateListing);

/**
 * @swagger
 * /listings/{id}:
 *   delete:
 *     summary: Delete listing by ID
 *     tags: [Listings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Listing ID
 *     responses:
 *       200:
 *         description: Listing deleted successfully
 *       404:
 *         description: Listing not found
 *       500:
 *         description: Server error
 */
router.delete('/listings/:id', deleteListing);

module.exports = router;
