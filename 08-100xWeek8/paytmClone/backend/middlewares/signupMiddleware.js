const zod = require("zod");

const signupSchema = zod.object({
  firstname: zod.string().min(3),
  lastname: zod.string(),
  username: zod.string().email(),
  password: zod.string().min(8),
});

const signupMiddleware = (req, res, next) => {
  const { firstname, lastname, username, password } = req.body;

  const safeUser = signupSchema.safeParse({
    firstname,
    lastname,
    username,
    password,
  });

  if (!safeUser.success) {
    return res.status(400).json({
      msg: "invalid inputs",
      issues: safeUser.error.issues,
    });
  }
  next();
};
module.exports = { signupMiddleware };
