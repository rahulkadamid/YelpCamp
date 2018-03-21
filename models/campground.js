var mongoose = require("mongoose");

// SCHEMA SET UP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    author: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      username: String
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
      }
    ],
    created: {
      type: Date,
      default: Date.now
    }
});

var Campground = mongoose.model("Campground", campgroundSchema);
module.exports = Campground
