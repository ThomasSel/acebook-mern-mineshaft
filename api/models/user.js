const mongoose = require("mongoose");

// // seed is the random seed to generate random avatars
// const seed = Math.round(Math.random() * 100);
// const url = `https://avatars.dicebear.com/api/open-peeps/${seed}.svg`;

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userDob: { type: Date, required: true },
  photoUrl: { type: String, default: '' }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
