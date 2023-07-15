const jwt = require("jsonwebtoken");
const User = require("../model/User");
const Snippet = require("../model/Snippet");

const createSnippet = async (req, res) => {
  const { token } = req.cookies;
  const { title, description } = req.body;
  if (!(token && title && description)) {
    return res.status(401).json({ msg: "provide all details" });
  }

  const decodedToken = jwt.verify(token, "aditya");
  if (!decodedToken) {
    return res.status(403).json({ msg: "invalid token" });
  }

  const user = await User.findOne({ email: decodedToken.email });
  const snippet = await Snippet.create({
    title,
    description,
    userId: user._id,
  });

  return res.status(200).json(snippet);
};

const getAllSnippet = async (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(403).send("not allowed");
  }

  const decodeToken = await jwt.verify(token, "aditya");
  if (!decodeToken) {
    return res.status(401).send("user not found");
  }

  const user = await User.findOne({ email: decodeToken.email });

  const allSnippet = await Snippet.find({ userId: user._id });

  console.log(allSnippet);

  return res.status(200).send(allSnippet);
};

module.exports = { createSnippet, getAllSnippet };
