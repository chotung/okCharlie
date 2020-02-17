const express = require("express")
const app = express()
require("dotenv").config();
const db = require("./models")
const { Charlie, User } = db

const {HOST, PORT } = process.env;

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use("/api", require("./routes/users.js"));
app.use("/api", require("./routes/charlies.js"));

app.get("/test", async (req, res) => {
  const user = await User.findByPk(1, {
    includes: ['charlie']
  })
  console.log(user.get())
})
app.get("/test2", async (req, res) => {
  const charlie = await Charlie.findByPk(1, {
    includes: ['user']
  })
  console.log(charlie.get())
})


app.get("*", async (req, res) => {
  res.send("Welcome to the Homepage")
})


const seed = () => {
  return Promise.all([
    Charlie.create({name: "Vanilla Charlie"}),
    User.create({
      name: "Laura",
      age: 18,
      email: "hotsingle@gmail.com",
      sex: "female"
    }),
    User.create({
      name: "Lara",
      age: 18,
      email: "hotsingle@gma.com",
      sex: "female"
    }),
    User.create({
      name: "Laur",
      age: 18,
      email: "hotsingle@gmai.com",
      sex: "female"
    }),
    User.create({
      name: "Aura",
      age: 18,
      email: "hotsingle@gmil.com",
      sex: "female"
    }),
    User.create({
      name: "Lena",
      age: 18,
      email: "hotsinge@gmail.com",
      sex: "female"
    }),
    User.create({
      name: "Len",
      age: 18,
      email: "hotsigle@gmail.com",
      sex: "female"
    }),
    User.create({
      name: "Ena",
      age: 18,
      email: "hosingle@gmail.com",
      sex: "female"
    })
  ])
  .catch(err => console.log(err))
}


///////////////////////
db.sequelize.sync({ 
  force: true,
  logging: false 
})
.then(() => {
  seed();
})

.then(() => {
  app.listen(PORT, function() {
    console.log(`Server is listening on http://${HOST}:${PORT}`);
  })
})
