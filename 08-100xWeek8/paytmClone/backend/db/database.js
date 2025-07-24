const mongoose = require("mongoose");

mongoose
  .connect("")
  .then(() => console.log("database connected sucessfully"))
  .catch((e) => {
    console.log("error in connecting the database");
  });

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("Users", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = { User, Account };
