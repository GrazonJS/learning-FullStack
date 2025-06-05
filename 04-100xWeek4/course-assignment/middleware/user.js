const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config");

const userMiddleware = async (req, res, next) => {
  const token = req.headers.authentication;
  const words = token.split(" ");
  const userToken = words[1];
  // console.log(userToken);

  const decoded = jwt.verify(userToken, JWT_SECRET_KEY);

  if (decoded.username) {
    req.username = decoded.username;
    next();
  } else {
    res.status(403).json({
      msg: "User does not exist",
    });
  }
};

module.exports = userMiddleware;
