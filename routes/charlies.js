const express = require("express");
const router = express.Router();
const Charlie = require("../models/Charlie"); // User model

// GET ALL THE CHARLIES
router.get("/charlies", async (req, res) => {
  const allCharlies = await Charlie.find({})
  res.json(allCharlies)
})

// GET ONE CHARLIE
router.get("/charlies/:name", async (req, res) => {
  const { name } = req.params
  // I control what charlies enter
  const oneCharlie = await Charlie.findOne({
    name
  }) 
  res.json(oneCharlie)
})
// EDIT ONE CHARLIE
router.put("/charlies/:name", async (req, res) => {
  // const { name } = req.params
  // I control what charlies enter
  const oneCharlie = await Charlie.findOneAndUpdate({
    name:req.params.name,
    description: req.body.description,
    title: req.body.title
  }) 
  res.json(oneCharlie)
})

//DELETE ONE CHARLIE
router.delete("/charlies/:name", async (req, res) => {
  // const { name } = req.params

  // I control what charlies enter
  const oneCharlie = await Charlie.findOneAndDelete({
    name:req.params.name,
  }) 
  res.json({msg: "Successfully Deleted A Charlie :("})
})



module.exports = router