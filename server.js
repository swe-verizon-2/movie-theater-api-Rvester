// server.js
const express = require("express");
const { db } = require("./db/connection");
const seed = require("./db/seed");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Include routers
const userRoutes = require("./routes/Users");
const showRoutes = require("./routes/Shows");

app.use("/users", userRoutes);
app.use("/shows", showRoutes);

// Start server and seed database
const startServer = async () => {
  await seed(); // Seed the database
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
