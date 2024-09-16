const express = require("express");
const auth = require("../middleware/userAuth");
const { createUser, login, verifyToken, updateUser } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/register", createUser);
userRouter.post("/login", login);
userRouter.get("/verifytoken", auth, verifyToken);
userRouter.put("/update", auth, updateUser);
module.exports = userRouter;
