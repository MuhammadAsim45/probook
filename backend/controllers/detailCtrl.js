const Details = require("../moddels/detailModel");

const detailCtrl = {
  addDetails: async (req, res) => {
    try {
      const {
        firstName,
        Lastname,
        DOB,
        AdressLine1,
        AdressLine2,
        Zipcode,
        city,
        Country,
        Gender,
        department,
        position,
        workEmail,
        companyType,
        CNIC,
        companyName,
        mobile,
      } = req.body;

      const newDetail = new Details({
        firstName,
        Lastname,
        DOB,
        AdressLine1,
        AdressLine2,
        Zipcode,
        city,
        Country,
        Gender,
        department,
        position,
        workEmail,
        companyType,
        CNIC,
        companyName,
        mobile,
      });
      await newDetail.save();
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = detailCtrl;
