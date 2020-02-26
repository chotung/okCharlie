const express = require("express");
const router = express.Router();
const Charlie = require("../models/Charlie"); // User model


router.get("/charlies", async (req, res) => {
  const allCharlies = await Charlie.find({})
  res.json(allCharlies)
})


module.exports = router