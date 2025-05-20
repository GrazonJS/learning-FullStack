const { Admin } = require("../database/database");

const adminMiddleware = async (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;

  const isAdmin = await Admin.findOne({
    username: username,
    password: password,
  });
  if (isAdmin) {
    next();
  } else {
    res.status(403).json({
      msg: "admin does not exist",
    });
  }
};

module.exports = adminMiddleware;
