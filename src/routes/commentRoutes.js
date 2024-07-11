const express = require('express');
const {
  createComment,
  getComments,
  getCommentById,
  updateComment,
  deleteComment
} = require('../controllers/commentController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Comment management endpoints
 */

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
 *         description: Server error
 */
router.get('/comments', getComments);

/**
 * @swagger
 * /comments/{id}:
 *   get:
 *     summary: Get comment by ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Comment ID
 *     responses:
 *       200:
 *         description: Comment data
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Server error
 */
router.get('/comments/:id', getCommentById);

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
 *               ma_phong:
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
 *             example:
 *               ma_phong: '60c72b2f5f1b2c001c8e4e3d'
 *               ma_nguoi_binh_luan: '60c72b1f5f1b2c001c8e4e2b'
 *               ngay_binh_luan: '2022-07-01'
 *               noi_dung: 'Great place!'
 *               sao_binh_luan: 5
 *     responses:
 *       201:
 *         description: Comment created successfully
 *       500:
 *         description: Server error
 */
router.post('/comments', createComment);

/**
 * @swagger
 * /comments/{id}:
 *   put:
 *     summary: Update comment by ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Comment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma_phong:
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
 *             example:
 *               ma_phong: '60c72b2f5f1b2c001c8e4e3d'
 *               ma_nguoi_binh_luan: '60c72b1f5f1b2c001c8e4e2b'
 *               ngay_binh_luan: '2022-07-01'
 *               noi_dung: 'Great place!'
 *               sao_binh_luan: 5
 *     responses:
 *       200:
 *         description: Comment updated successfully
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Server error
 */
router.put('/comments/:id', updateComment);

/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     summary: Delete comment by ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Comment ID
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Server error
 */
router.delete('/comments/:id', deleteComment);

module.exports = router;
