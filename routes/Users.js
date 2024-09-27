// routes/users.js
const express = require("express");
const router = express.Router();
const { User, Show } = require("../models/index"); // Adjust the path if needed

// GET all users
router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// GET one user
router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

// GET all shows watched by a user
router.get("/:id/shows", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  const shows = await user.getShows();
  res.json(shows);
});

// PUT associate a user with a show they have watched
router.put("/:userId/shows/:showId", async (req, res) => {
  const user = await User.findByPk(req.params.userId);
  const show = await Show.findByPk(req.params.showId);
  await user.addShow(show);
  res.sendStatus(204);
});

module.exports = router;
