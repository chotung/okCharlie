const mongoose = require("mongoose")
const {Charlie} = require("../models")

const seed = [
  { name: "Vanilla Charlie" },
  { name: "Chocolate Charlie" },
  { name: "Strawberry Charlie" },
  { name: "Lovely Charlie" }
];

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});



// SEED DB WITH CHARLIES
// FIND OR CREATE