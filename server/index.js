const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const userRouter = require("./routes/user/userRouter");
const publicRouter = require("./routes/public/publicRouter");
const apiRouter = require("./routes/api/apiRouter");
require("./database/db").connect();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/", publicRouter);

app.use("/user", userRouter);

app.use("/api", apiRouter);

app.get("/auth", async (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(400).send("NO TOKEN");
  }
  // const decodedToken = await jwt.verify(token, 'aditya')
  const decode = jwt.decode(token);
  console.log(decode);
  if (decode === null) {
    return res.status(401).send("UNAUTHORISE");
  }
  const accessToken = jwt.sign(decode, "aditya");
  return res.status(200).json({ token: accessToken });
});
app.listen(3000, () => {
  console.log("surver is litining");
});
