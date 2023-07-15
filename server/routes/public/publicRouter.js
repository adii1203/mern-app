const express = require("express");
// const signUP = require('../../controller/publicController/signUp')
const { userLogin, signUP } = require("../../controller/publicController");
const validation = require("../../middleware/validation");

const PublicRouter = express.Router();

PublicRouter.route("/register").post(validation, signUP);

PublicRouter.route("/login").post(userLogin);

module.exports = PublicRouter;
