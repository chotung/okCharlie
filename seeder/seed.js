require("dotenv").config()
const mongoose = require("mongoose");
const seeder = require("mongoose-seed");

const data = [
  {
    model: "Charlie",
    documents: [
      { 
        name: "Vanilla Charlie",
        interestedIn: "Female",
        title: "The Duke of Vanilla",
        description: "The basic but reliable flavor of Charlie. Always there and loyal; will stick by your side till the end."
      },
      { 
        name: "Chocolate Charlie",
        interestedIn: "Female",
        title: "Romantic King of Chocolate",
        description: "The flavor you pick when you want a little of the dark side. Smooth; yet creamy"
      },
      { 
        name: "Strawberry Charlie",
        interestedIn: "Female",
        title: "Sweet Prince of Strawberries",
        description: "Sweet and refreshing flavor of strawberry, all packaged up in a hunky, manly form ready to sweeten your life"
      },
    ]
  }
];

// Connect to MongoDB via Mongoose
seeder.connect(process.env.DB_URL, function() {
  // Load Mongoose models
  seeder.loadModels(["models/Charlie.js"]);

  // Clear specified collections
  seeder.clearModels(["Charlie"], function() {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});

// Data array containing seed data - documents organized by Model

// SEED DB WITH CHARLIES
// FIND OR CREATE
