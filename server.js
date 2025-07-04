const express = require("express");
const path = require("path");
const jsonServer = require("json-server");

const app = express();
const api = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3001;

// Middleware for json-server
api.use(middlewares);
api.use("/api", router); // all APIs will be under /api/*

// Serve React static files
app.use(express.static(path.join(__dirname, "client", "build")));

// Mount json-server at /api
app.use("/api", api);

// React SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
