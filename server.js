const express = require("express");
const path = require("path");
const jsonServer = require("json-server");

const app = express();
const PORT = process.env.PORT || 3001;

// JSON Server setup
const apiRouter = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use( middlewares, apiRouter);

// Serve React build
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
