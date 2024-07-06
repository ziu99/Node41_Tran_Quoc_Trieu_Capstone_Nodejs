const Location = require('../models/Location');

exports.createLocation = async (req, res) => {
  try {
    const { ten_vi_tri, tinh_thanh, quoc_gia, hinh_anh } = req.body;
    const location = new Location({ ten_vi_tri, tinh_thanh, quoc_gia, hinh_anh });
    await location.save();
    res.status(201).json({ message: 'Location created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
