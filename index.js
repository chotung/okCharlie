const express = require("express")
const app = express()
const mongoose = require("mongoose")
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

// const port = process.env.PORT || 5000
require("dotenv").config();

const {
  HOST,
  PORT,
  SESS_SECRET,
  NODE_ENV,
  IS_PROD,
  COOKIE_NAME
} = require("./config");
const { MongoURI } = require("./config/database");

const MAX_AGE = 1000 * 60 * 60 * 3; // Three hours
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());


mongoose.connect(MongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to Database");
});

const mongoDBstore = new MongoDBStore({
  uri: MongoURI,
  collection: "mySessions"
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({
    name: COOKIE_NAME, //name to be put in "key" field in postman etc
    secret: SESS_SECRET,
    resave: true,
    saveUninitialized: false,
    store: mongoDBstore,
    cookie: {
      maxAge: MAX_AGE,
      sameSite: false,
      secure: IS_PROD
    }
  })
);

app.use("/api", require("./routes/users.js"));
app.use("/api", require("./routes/charlies.js"));
// app.get("*", (req, res) => {
//   res.send("Welcome to the Homepage")
// })

app.listen(PORT, console.log(`Server is listening on http://${HOST}:${PORT}`));