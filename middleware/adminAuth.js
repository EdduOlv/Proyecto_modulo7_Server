const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel");

module.exports =  async (req, res, next) => {
	let { authorization } = req.headers;

  if (!authorization) {
		return res.status(401).json({ msg: "Unauthorized access 1" })
	}
  try {
    let [type, token] = authorization.split(" ")
		if (type === "Token" || type === "Bearer") {
      const openToken = jwt.verify(token, process.env.SECRET)
      const { admin: { id } } = openToken;      
      const admin = await Admin.findOne({ _id: id});
      if (!admin) {
          throw res.status(401).json({ msg: "Unauthorized access 2" });
      }
      req.admin = openToken.admin
      next()
    } else {
      return res.status(401).json({ msg: "Unauthorized access 3" });
    }
  } catch (error) {
    res.json({ msg: "Unauthorized access 4", error });
  }
};
