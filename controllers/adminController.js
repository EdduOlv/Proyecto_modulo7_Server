const Admin = require("../models/adminModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createAdmin = async (req, res) => {
    const { adminName, email, password } = req.body;
    try {
      let foundAdmin = await Admin.findOne({ email });
      if (foundAdmin) {
        return res.status(400).json({ msg: "the mail already exists" });
      }
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);
      const DBresp = await Admin.create({
        adminName,
        email,
        password: hashedPassword,
      });
      return res.json(DBresp);
    } catch (error) {
      return res.status(400).json({ msg: error });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
      let foundAdmin = await Admin.findOne({ email });
      if (!foundAdmin) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      const correctPassword = await bcryptjs.compare(
        password,
        foundAdmin.password
      );
      if (!correctPassword) {
        return await res
          .status(400)
          .json({ msg: "Invalid credentials" });
      }
      const payLoad = { admin: { id: foundAdmin.id } };
      jwt.sign(
        payLoad,
        process.env.SECRET,
        { expiresIn: 3600 },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      res.json({
        msg: "We have an error",
        error,
      });
    }
};
  
exports.verifyAdminToken = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select("-password");
    res.json({ admin });
  } catch (error) {
    res.status(500).json({
      msg: "We have an error",
      error,
    });
  }
};

exports.updateAdmin = async (req, res) => {
  const { id, adminName, email, password } = req.body;
  try {
    const salt = await bcryptjs.genSalt(10);
    const updatePassword = await bcryptjs.hash(password, salt);
    const updateAdmin = await Admin.findByIdAndUpdate(id, { adminName, email,  password: updatePassword }, { new: true });
    res.json(updateAdmin);
  } catch (error) {
    res.status(500).json({
      msg: "There was an error updating the admin",
      error,
    });
  }
};