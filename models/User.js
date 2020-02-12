const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User"); // User model

// REGISTER
router.post("/register", (req, res) => {
  const { name, email, password, location } = req.body;

  // Check required fields
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  //Check password length
  if (password.length < 6) {
    return res
      .status(400)
      .json({ msg: "Password should be at least 6 characters long" });
  }
  User.findOne({ email: email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    //New User created
    const newUser = new User({
      name,
      email,
      password,
      location
    });

    //Password hashing
    bcrypt.genSalt(12, (err, salt) =>
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;

        newUser.password = hash;
        // Save user
        newUser
          .save()
          .then(
            res.json({
              msg: "Successfully Registered"
            })
          )
          .catch(err => console.log(err));
      })
    );
  });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  // basic validation
  console.log("Login route", email, " ", password);
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  //check for existing user
  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    // Validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      const sessUser = { id: user.id, name: user.name, email: user.email };
      req.session.user = sessUser; // Auto saves session data in mongo store

      res.json({ msg: " Logged In Successfully", sessUser }); // sends cookie with sessionID automatically in response
    });
  });
});

// DELETE SESSIONS
router.delete("/logout", (req, res) => {
  console.log(req.body);
  console.log(req.session);
  req.session.destroy(err => {
    //delete session data from store, using sessionID in cookie
    if (err) throw err;
    res.clearCookie("session-id"); // clears cookie containing expired sessionID
    res.send("Logged out successfully");
  });
});

// AUTH
router.get("/authchecker", (req, res) => {
  const sessUser = req.session.user;
  if (sessUser) {
    return res.json({ msg: " Authenticated Successfully", sessUser });
  } else {
    return res.status(401).json({ msg: "Unauthorized" });
  }
});

// DELETE YOUR ACCOUNT

router.delete("/users/:id", async (req, res) => {
  // WIP (WORK IN PROGRESS)
  try {
    User.findOneAndDelete({ _id: req.params.id }, (err, data) => {
      if (data) {
        res.json({ message: "Your Account Has Been Deleted" });
      } else {
        res.json({ message: "Account does not exist" });
      }
    });
  } catch (err) {
    console.error({ message: err });
  }
});

// ADMIN ROUTES
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error({ message: err });
    res.status(404);
  }
});

module.exports = router;
