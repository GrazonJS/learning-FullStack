const JWT_PASSWORD = require("../config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      msg: "authorization invalid",
    });
  }

  const splitToken = authHeader.split(" ");
  const token = splitToken[1];

  try {
    const decoded = jwt.verify(token, JWT_PASSWORD);
    if (decoded.userId) {
      req.userId = decoded.userId;
      next();
    } else {
      res.status(411).json({
        msg: "wrong token sent!",
      });
    }
  } catch {
    res.status(403).json({
      msg: "access forbidden / not verified token ",
    });
  }
};

module.exports = { authMiddleware };
