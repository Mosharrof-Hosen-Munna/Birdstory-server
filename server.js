const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());

const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@project.wytfk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// import routes
const authRoutes = require("./Routes/authRoutes");

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Birdstory running");
});

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
      console.log("database connected");
    });
  })
  .catch((e) => {
    console.log(e);
  });
