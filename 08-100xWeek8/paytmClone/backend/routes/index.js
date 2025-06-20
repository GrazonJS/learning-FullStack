const userRouter = require("./userRoute");
const { Router } = require("express");
const router = Router();

//for users
router.use("/user", userRouter);

//for accounts
router.use("/accout", userRouter);

module.exports = router;
