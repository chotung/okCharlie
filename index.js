const express = require("express")
const app = express()
require("dotenv").config();

const port = process.env.PORT || 5000

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
// app.get("*", (req, res) => {
//   res.send("Welcome to the Homepage")
// })

app.listen(PORT, console.log(`Server is listening on http://${HOST}:${PORT}`));