const express = require("express");
const router = express.Router();
const Charlie = require("../models/Charlie")

router.post("/add/char", async (req, res) => {
  const { name, typeOfCharlie, location} = req.body
  console.log(req.body)
  const newCharlie = await new Charlie({
    name,
    typeOfCharlie,
    location
  })
  const savedCharlie = await newCharlie.save()
  res.json(savedCharlie)
})


module.exports = router