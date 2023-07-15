const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const validation = require("../middleware/validation");

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).send("all fields are required");
  }

  const userExist = await User.findOne({ email });
  if (!userExist) {
    return res.status(401).send("user not found");
  }

  const verifiedPassword = await bcrypt.compare(password, userExist.password);
  if (!verifiedPassword) {
    return res.status(400).send("wrong password");
  }

  const token = await jwt.sign({ email: email }, "aditya");

  res.cookie("token", token, {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    httpOnly: true,
  });
  res.status(200).send({
    token: token,
    user: {
      email: userExist.email,
      name: userExist.name,
    },
    msg: "login sucess",
  });
};

const signUP = async (req, res) => {
  const { email, password, name } = req.body;

  const userExist = await User.findOne({ email });
  if (!userExist) {
    const salt = bcrypt.genSaltSync(15);
    const hashPassword = await bcrypt.hashSync(password, salt);

    const user = await User.create({
      email,
      name,
      password: hashPassword,
    });

    user.password = undefined;
    res.status(200).send(user);
  } else {
    res.status(400).send("user already exist");
  }
};

module.exports = { userLogin, signUP };
