const express = require("express");
const apiRouter = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../../model/User");
const Snippet = require("../../model/Snippet");

apiRouter.route("/v1/createnode").post(async (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.send("no token");
  }

  const decode = await jwt.verify(token, "aditya");

  const user = await User.findOne({ email: decode.email });

  const snippet = await Snippet.create({
    title: "untitled",
    userId: decode._id,
  });
  const all = await Snippet.find({ userId: decode._id });
  return res.send(all);
});

module.exports = apiRouter;
