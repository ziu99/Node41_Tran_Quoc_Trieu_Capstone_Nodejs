const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Comment management
 */

/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Create a new comment
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma_cong_viec:
 *                 type: string
 *               ma_nguoi_binh_luan:
 *                 type: string
 *               ngay_binh_luan:
 *                 type: string
 *                 format: date
 *               noi_dung:
 *                 type: string
 *               sao_binh_luan:
 *                 type: number
 *     responses:
 *       201:
 *         description: Comment created successfully
 *       500:
 *         description: Internal server error
 */
router.post('/', commentController.createComment);

/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Get all comments
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: List of all comments
 *       500:
 *         description: Internal server error
 */
router.get('/', commentController.getComments);

module.exports = router;
