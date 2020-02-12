const mongoose = require("mongoose");
const Schema = mongoose.Schema
const CharileSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  typeOfCharlie: {
    type: String,
    required: true
  },
  liked: {

  },
  date: {
    type: Date,
    default: Date.now
  },
  location: {
    type: String
  }
});

const Charlie = mongoose.model("Charlie", CharileSchema);

module.exports = Charlie;


// If someone likes a charlie they add to their list of liked

// How do i link that person with a charlie



/**
 * User { 
 *  name: "Laura",
 *  location: "NYC",
 *  liked: [Vanilla Charlie, Chocolate Charlie]
 *  likedBy: {Strawberry Charlie}
 *  email: hotsingle@gmail.com,
 *  
 * }
 * 
 * 
 * everytime they like they add to the liked array
 * if user swiped on charlie that is in likedBy it's a match 
 * as you swip you compare in the likedBy
 */ 