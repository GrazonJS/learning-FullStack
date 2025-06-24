const userRouter = require("./userRoute");
const accountRouter = require("./accountRoute");
const { Router } = require("express");
const router = Router();

//for users
router.use("/user", userRouter);

//for accounts
router.use("/account", accountRouter);

module.exports = router;
