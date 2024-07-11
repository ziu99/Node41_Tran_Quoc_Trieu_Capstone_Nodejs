const Listing = require('../models/Listing');

exports.createListing = async (req, res) => {
  try {
    const {
      ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, tivi, dieu_hoa, wifi, bep,
      do_xe, ho_boi, ban_ui, hinh_anh, vi_tri_id
    } = req.body;
    const listing = new Listing({
      ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, tivi, dieu_hoa, wifi, bep,
      do_xe, ho_boi, ban_ui, hinh_anh, vi_tri_id
    });
    await listing.save();
    res.status(201).json({ message: 'Listing created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getListings = async (req, res) => {
  try {
    const listings = await Listing.find().populate('vi_tri_id');
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate('vi_tri_id');
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }
    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateListing = async (req, res) => {
  try {
    const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }
    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findByIdAndDelete(req.params.id);
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }
    res.status(200).json({ message: 'Listing deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
