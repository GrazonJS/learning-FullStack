const { User } = require("../database/database");

const userMiddleware = async (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;

  const isUser = await User.findOne({
    username: username,
    password: password,
  });

  if (isUser) {
    next();
  } else {
    res.status(403).json({
      msg: "User does not exist",
    });
  }
};

module.exports = userMiddleware;
