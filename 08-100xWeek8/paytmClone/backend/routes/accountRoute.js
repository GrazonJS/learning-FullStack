const { Account } = require("../db/database");
const { Router } = require("express");
const { authMiddleware } = require("../middlewares/authmiddleware");
const mongoose = require("mongoose");
const router = Router();

router.get("/balance", authMiddleware, async (req, res) => {
  userId = req.userId;
  try {
    const userAccount = await Account.findOne({ userId });
    console.log(userAccount);

    res.json({
      msg: "here is your balance",
      balance: userAccount.balance,
    });
  } catch {
    res.status(500).json({
      msg: "error with the account database",
    });
  }
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  const recieverId = req.body.to;
  const amount = req.body.amount;

  const userAccount = await Account.findOne({ userId: req.userId }).session(
    session
  );

  const recieverAccount = await Account.findOne({ userId: recieverId }).session(
    session
  );

  if (!recieverAccount) {
    return res.status(400).json({
      msg: "Invalid account",
    });
  }

  if (amount > userAccount.balance || !userAccount) {
    return res.status(400).json({
      msg: "insuffient balance",
    });
  }

  await Account.updateOne(
    { userId: req.userId },
    {
      $inc: {
        balance: -amount,
      },
    }
  ).session(session);

  await Account.updateOne(
    { userId: recieverId },
    {
      $inc: {
        balance: amount,
      },
    }
  ).session(session);

  await session.commitTransaction();

  res.json({
    msg: "transaction successful",
  });
});

module.exports = router;
