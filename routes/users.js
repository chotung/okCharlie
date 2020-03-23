const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs");
const User = require("../models/User"); // User model
const Charlie = require("../models/Charlie"); // User model

// Get all users
router.get("/users", async (req, res) => {
  const allUsers = await User.find({});
  res.json(allUsers);
});

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password, passwordConfirmation, interestedIn, sex, location, title, description } = req.body.registerInfo;

  // VALIDATIONS OF INPUTS
  const allTheCharlies = await Charlie.find({})
  // Check required fields
  if (!name || !email || !password || !title || !sex || !interestedIn) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  // Password Validations
  const checkLength = new RegExp(/.{8,16}$/, "g").exec(password)
  const checkLowerCase = new RegExp(/^(?=.*[a-z])/, "g").exec(password)
  const checkUpperCase = new RegExp(/(?=.*[A-Z])/, "g").exec(password)
  const checkNumber = new RegExp(/(?=.*\d)/, "g").exec(password)
  const checkSpecialChars = new RegExp(/(?=.*[#$^+=!*()@%&])/, "g").exec(password)

  //Check password length
  if (!checkLength) {
    return res
      .status(400)
      .json({ msg: "Password should be 8 - 16 characters long." });
  } else if(!checkLowerCase) {
    return res
      .status(400)
      .json({ msg: "Password should contain a lower case letter."})
  } else if (!checkUpperCase) {
    return res
      .status(400)
      .json({
        msg: "Password should contain a capital letter."
      })
  } else if (!checkNumber) {
    return res
      .status(400)
      .json({
        msg: "Password should contain a number."
      })
  } else if (!checkSpecialChars) {
    return res
      .status(400)
      .json({
        msg: "Password should contain a special character."
      })
  } else if (password !== passwordConfirmation) {
    return res
      .status(400)
      .json({
        msg: "Passwords do not match"
      })
  }
  
  const user = await User.findOne({ email: email })
  if (user) return res.status(400).json({ msg: "User already exists" });
  const newUser = await new User({
    name,
    email,
    password,
    sex,
    interestedIn,
    title,
    description,
    location,
    likeBy: allTheCharlies
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
            msg: "Successfully Registered",
            user: newUser
          })
        )
        .catch(err => console.log(err));
    })
  );
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // basic validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  //check for existing user
  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ msg: "User does not exist" });
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

  const sessUser = { id: user.id, name: user.name, email: user.email };
  req.session.user = sessUser; // Auto saves session data in mongo store

  res.json({ msg: " Logged In Successfully", sessUser }); // sends cookie with sessionID automatically in response
});

// DELETE SESSIONS
router.delete("/logout", (req, res) => {
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

// DELETE USER ACCOUNT
router.delete("/users/delete/:name", async (req, res) => {
  // allow change of description
  // console.log(req.body._id)
  const findUser = await User.findOneAndDelete({
    _id: req.body._id
  });

  res.send("redirect to signup again");
});


// ================================================

// LIKE
router.put("/likes", async (req, res) => {
  const { name, personLiked } = req.body;
  // User/Person you swiped left    
  const appUser = await User.findOne({ name: name });
  const loveInterest = await Charlie.findOne({
    name: personLiked.name
  });
  // MAKES SURE YOU CAN'T ACCIDENTALLY DOUBLE LIKE SOMEONE
  // MAKE SURE YOU CAN'T LIKE THE SAME PERSON TWICE
  const alreadyLiked = await User.find({
    "likes._id": loveInterest._id
  });

  // console.log(
  //   "app user:", appUser,
  //   "\n",
  //   "love interest should be a charlie:", loveInterest,
  //   "\n",
  //   "already liked person", alreadyLiked
  // )

  if (alreadyLiked.length !== 0) {
    // Fix this error (node:88291) UnhandledPromiseRejectionWarning: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    // res.send("You can't like the same person twice!!!!!!!!!!!!");
    res.status(400).json({msg: "You can't like the same person twice."})
  } else {
    // ELSE MEANING I DIDNT LIKE THIS PERSON YET
    // HANDLES THE USER LIKES ARRAY
    await User.findOneAndUpdate(
      { name: name },
      {
        $push: {
          likes: { name: loveInterest.name, _id: loveInterest._id }
        }
      }
    );
    // // HANDLE THE LOVE INTEREST LIKEBY ARRAY
    await Charlie.findOneAndUpdate(
      { name: loveInterest.name },
      {
        $push: {
          likeBy: { name: appUser.name, _id: appUser._id }
        }
      }
    );

    const matching = await User.find({
      "likeBy.name": loveInterest.name
    });

    if (matching.length !== 0) {
      res.json({msg: "You Matched Hurray!!!", matched:true})
    }
  }
  // ==== CHECK IF ITS A MATCH!!! <3 ==== //
});
// DISLIKE
router.put("/dislikes", async (req, res) => {
  const { name, personLiked } = req.body;
  // User/Person you swiped left    
  // const appUser = await User.findOne({ name: name });
  const loveInterest = await Charlie.findOne({
    name: personLiked.name
  });
  const dislikedCharlie = await User.find({
    "likes._id": loveInterest._id
  });


  if (dislikedCharlie.length !== 0) {
    // res.send("You can't like the same person twice!!!!!!!!!!!!");
    res.status(400).json({msg: "You didn't like this charlie???"})
  } else {
    // ELSE MEANING I DIDN'T DISLIKE THIS PERSON YET
    // HANDLES THE USER LIKES ARRAY
    await User.findOneAndUpdate(
      { name: name },
      {
        $push: {
          dislikes: { name: loveInterest.name, _id: loveInterest._id }
        }
      }
    );
  }
  res.json({msg: "You dislike the man of your dreams..."})
});








// ===================================================
// UPDATE USER INFO ROUTE
router.put("/user/update/:name", async (req, res) => {
  console.log(req.params);
  // allow change of description
  const findUser = await User.findOneAndUpdate(
    {
      name: req.body.name
    },
    {
      title: req.body.title,
      description: req.body.description
    }
  );
  console.log(findUser);
  res.send("redirect to profile again");
});

module.exports = router;
