const express = require("express");
const auth = require("../middleware/adminAuth");
const { createAdmin, login, verifyAdminToken, updateAdmin } = require("../controllers/adminController");

const adminRouter = express.Router();

adminRouter.post("/register", createAdmin);
adminRouter.post("/login", login);
adminRouter.get("/verifytoken", auth, verifyAdminToken );
adminRouter.put("/update", auth, updateAdmin);

module.exports = adminRouter;
