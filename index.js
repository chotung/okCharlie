const express = require("express")
const app = express()
require("dotenv").config();
const {HOST, PORT } = process.env;
const mongoose = require("mongoose")
const User = require("./models/User")

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

// DATABASE CONFIGS
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
const db = mongoose.connection
db.on("error", console.error.bind(console, "Connection Error:"))
db.once("open", () => {
  console.log("We're connected!")
})

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// app.use("/api", require("./routes/users.js"));
// app.use("/api", require("./routes/charlies.js"));







app.put("/likes", async (req, res) => {
  const { name, personLiked } = req.body
  // User/Person you swiped left
  const appUser = await User.findOne(
    { name: name }
  )
  const loveInterest = await User.findOne({
    name: personLiked.name
  })
  

  // MAKES SURE YOU CAN'T ACCIDENTALLY DOUBLE LIKE SOMEONE
     // MAKE SURE YOU CAN'T LIKE THE SAME PERSON TWICE

  const alreadyLiked = await User.find({
    "likes._id": loveInterest._id
  })

  // console.log("Did I like this person?", alreadyLiked)
  if(alreadyLiked.length !== 0) {
    // Fix this error (node:88291) UnhandledPromiseRejectionWarning: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    console.log("You can't like the same person twice!!!!!!!!!!!!")
    res.send("You can't like the same person twice!!!!!!!!!!!!");
  } else {
    // ELSE MEANING I DIDNT LIKE THIS PERSON YET
    // SHOOT YOUR SHOT WOOWHOOOOO
    // HANDLES THE USER LIKES ARRAY
    await User.findOneAndUpdate(
      { name: name},
      {
        $push: {
          likes: {name: loveInterest.name, _id: loveInterest._id}
        }
      }
    );

    // // HANDLE THE LOVE INTEREST LIKEBY ARRAY
    await User.findOneAndUpdate(
      { name: loveInterest.name },
      {
        $push: {
          likeBy: { name: appUser.name, _id: appUser._id}
        }
      }
    )
  }


  // ==== CHECK IF ITS A MATCH!!! <3 ==== //
  const matching = await User.find({
    "likeBy.name": loveInterest.name
  })

  // console.log("Matching", matching)
  if(matching.length !== 0) {
    console.log("YOU MATCHED OMG HURRAY!")
    res.send("YOU MATCHED OMG HURRAY!")
  }
  res.send("keep swiping")

 
})


// UPDATE USER INFO ROUTE
app.put("/user/update/:name", async (req, res) => {
  console.log(req.params)
  // allow change of description
  const findUser = await User.findOneAndUpdate(
    {
      name: req.body.name
    },
    {
      description: req.body.description
    }
  )
  console.log(findUser)
  res.send("redirect to profile again")
})
// DELETE USER ACCOUNT
app.delete("/user/:name", async (req, res) => {
  // allow change of description
  const findUser = await User.findOneAndDelete(
    {
      _id: req.body._id
    }
  )

  res.send("redirect to signup again")
})


// TESTING ROUTES

app.get("/seed", async (req, res) => {
  const seed = [
    {name: "Vanilla Charlie"},
    {name: "Chocolate Charlie"},
    {name: "Strawberry Charlie"},
    {name: "Lovely Charlie"},
  ]

  await User.create(seed, (err, listOfCharlies)=> {
    if(err) throw err

    console.log(listOfCharlies[0])
    console.log(listOfCharlies[1])
    console.log(listOfCharlies[2])
    console.log(listOfCharlies[3])
    res.send("Seeded with Charlies")
  })
})

app.get("/users", async (req, res) => {
  // Testing purposes

  const allUsers = await User.find({});
  res.json(allUsers);
});

app.post("/users", async (req, res) => {
  // Testing purposes
  const newUser = await User.create({
    name: req.body.name
  });

  res.json({ msg: "New User Successfully Created", newUser });
});


app.delete("/deleteall", async (req, res) => {
  await User.deleteMany({})
  res.send("Deleted All Users")
})


app.get("*", (req, res) => {
  res.send("Hello World") 
})
app.listen(PORT, function() {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
})