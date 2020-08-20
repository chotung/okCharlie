const express = require("express")
const app = express()
require("dotenv").config();
const {
  HOST,
  PORT,
  SESS_SECRET,
  NODE_ENV,
  IS_PROD,
  COOKIE_NAME
} = require("./config/config");
const { MongoURI } = require("./config/database");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose")
const compression = require("compression")

const MAX_AGE = 1000 * 60 * 60 * 3; 
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(compression())

// DATABASE CONFIGS

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
const db = mongoose.connection

const mongoDBstore = new MongoDBStore({
  uri: MongoURI,
  collection: "mySessions"
});

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
app.use((req, res, next) => {
  if(req.cookies.user_sid && !req.session.user) [
    res.clearCookie('user_sid')
  ]
})

db.on("error", console.error.bind(console, "Connection Error:"))
db.once("open", () => {
  console.log("We're connected!")
})

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use("/api", require("./routes/users.js"));
app.use("/api", require("./routes/charlies.js"));

app.get("*", (req, res) => {
  // res.send("Hello World") 
  // res.redirect('../api/charlies')
})
app.listen(PORT, function() {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
})