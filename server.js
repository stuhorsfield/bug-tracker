const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const tasks = require("./routes/api/tasks");

const app = express();

// Middleware
app.use(bodyParser.json());

// Database
const db = require("./config/keys").mongoURI;

// Connect MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(console.log);

// Routes
app.use("/api/tasks", tasks);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static dir
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.port || "5000";

app.listen(port, () => console.log(`Server started on port ${port}`));
