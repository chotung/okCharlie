const express = require("express")
const app = express()
require("dotenv").config();

// const PORT = process.env.PORT || 5000
const Sequelize = require("sequelize");


const { DATABASE, DATABASE_USER, DATABASE_PASSWORD, HOST, PORT } = process.env;
const sequelize = new Sequelize(DATABASE, DATABASE_USER, DATABASE_PASSWORD, {
  host: "localhost",
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
})
.authenticate()
.then(() => {
  console.log("Connection has been established successfully")
})
.catch( err => {
  console.error("Failed To Connect To The Database: ", err)
})

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use("/api", require("./routes/users.js"));
// app.use("/api", require("./routes/charlies.js"));
// app.get("*", (req, res) => {
//   res.send("Welcome to the Homepage")
// })

app.listen(PORT, console.log(`Server is listening on http://${HOST}:${PORT}`));