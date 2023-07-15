const validation = (req, res, next) => {
  const { email, password, name } = req.body;

  if (!(email && password && name)) {
    return res.status(403).send("all feilds are required");
  }

  if (password.length < 10) {
    return res.send("password wust be 10 char");
  }

  next();
};

module.exports = validation;
