const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes.js");
const db = require('./db.js');

const app = express();

app.use(cors());
app.use(express.json());

db.Database();

app.get('/', (req, res) => {
  res.send('Server is running successfully 🚀');
});

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
