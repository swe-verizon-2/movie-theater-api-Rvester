// server.js
const express = require("express");
const { db } = require("./db/connection"); // Adjust the path if needed
const seed = require("./db/seed"); // Make sure this imports your seed function

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Include routers
const userRoutes = require("./routes/users");
const showRoutes = require("./routes/shows");

app.use("/api/users", userRoutes);
app.use("/api/shows", showRoutes);

// Start server and seed database
const startServer = async () => {
  await seed(); // Seed the database
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
