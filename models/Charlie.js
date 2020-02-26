const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharlieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  interestedIn: {
    type: String,
    required: true
  },
  likeBy: [{}],
  likes: [{}],
  disLikes: [{}],
  description: String
});

const Charlie = mongoose.model("Charlie", CharlieSchema);
module.exports = Charlie;
