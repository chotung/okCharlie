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
  useUnifiedTopology: true
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

app.get("/seed", (req, res) => {
  const seed = [
    {name: "Vanilla Charlie"},
    {name: "Chocolate Charlie"},
    {name: "Strawberry Charlie"},
  ]

  User.create(seed, (err, listOfCharlies)=> {
    if(err) throw err

    console.log(listOfCharlies[0])
    console.log(listOfCharlies[1])
    console.log(listOfCharlies[2])
  })
})


app.listen(PORT, function() {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
})