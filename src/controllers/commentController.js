const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  try {
    const { ma_cong_viec, ma_nguoi_binh_luan, ngay_binh_luan, noi_dung, sao_binh_luan } = req.body;
    const comment = new Comment({ ma_cong_viec, ma_nguoi_binh_luan, ngay_binh_luan, noi_dung, sao_binh_luan });
    await comment.save();
    res.status(201).json({ message: 'Comment created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate('ma_cong_viec ma_nguoi_binh_luan');
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).populate('ma_cong_viec ma_nguoi_binh_luan');
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
