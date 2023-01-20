const User = require("../models/user");

const UsersController = {
  Create: (req, res) => {
    // seed is the random seed to generate random avatars
    const seed = Math.round(Math.random() * 100);
    const url = `https://avatars.dicebear.com/api/open-peeps/${seed}.svg`;

    const user = new User({ email: req.body.email, password: req.body.password,  firstName: req.body.firstName, lastName: req.body.lastName, userDob: req.body.userDob, photoUrl: url });



    user.save((err) => {
      if (err) {
        res.status(400).json({ message: "Bad request" });
      } else {
        res.status(201).json({ message: "OK" });
      }
    });
  },
};

module.exports = UsersController;
