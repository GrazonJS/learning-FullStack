const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config");

const adminMiddleware = async (req, res, next) => {
  const token = req.headers.authentication;
  const words = token.split(" ");
  const jwtToken = words[1];
  console.log(jwtToken);

  const decodedvalue = jwt.verify(jwtToken, JWT_SECRET_KEY);
  console.log(decodedvalue);
  if (decodedvalue.username) {
    next();
  } else {
    res.status(403).json({
      msg: "invalid token, you are not authenticated",
    });
  }
};

module.exports = adminMiddleware;
