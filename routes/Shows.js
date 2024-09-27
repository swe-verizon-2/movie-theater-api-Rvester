// routes/shows.js
const express = require("express");
const router = express.Router();
const { Show, User } = require("../models/index"); // Adjust the path if needed

// GET all shows
router.get("/", async (req, res) => {
  const shows = await Show.findAll();
  res.json(shows);
});

// GET one show
router.get("/:id", async (req, res) => {
  const show = await Show.findByPk(req.params.id);
  res.json(show);
});

// GET all users who watched a show
router.get("/:id/users", async (req, res) => {
  const show = await Show.findByPk(req.params.id);
  const users = await show.getUsers();
  res.json(users);
});

// PUT update the available property of a show
router.put("/:id", async (req, res) => {
  const show = await Show.findByPk(req.params.id);
  show.available = req.body.available;
  await show.save();
  res.sendStatus(204);
});

// DELETE a show
router.delete("/:id", async (req, res) => {
  const show = await Show.findByPk(req.params.id);
  await show.destroy();
  res.sendStatus(204);
});

// GET shows of a particular genre
router.get("/genre", async (req, res) => {
  const shows = await Show.findAll({ where: { genre: req.query.genre } });
  res.json(shows);
});

module.exports = router;
