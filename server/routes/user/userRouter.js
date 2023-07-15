const express = require("express");
const {
  createSnippet,
  getAllSnippet,
} = require("../../controller/userController");
const userRouter = express.Router();

userRouter.route("/newSnippet").post(createSnippet);
userRouter.route("/api/allsnippet").get(getAllSnippet);

module.exports = userRouter;
