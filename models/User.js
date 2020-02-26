const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  title: String,
  interestedIn: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  location: {
    lat: {
      type: Number,
      default: 40.73061
    },
    lng: {
      type: Number,
      default: -73.935242
    }
  },

  likeBy: [{}],
  likes: [{}],
  disLikes: [{}],
  description: String
});

const User = mongoose.model("User", UserSchema);
module.exports = User