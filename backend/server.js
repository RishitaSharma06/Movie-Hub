const dns=require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);


const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes.js");
const db = require('./db.js');

const app = express();

app.use(cors());
app.use(express.json());

const dbUrl=process.env.ATLASDB_URL;
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Error connecting to MongoDB:", error));

app.get('/', (req, res) => {
  res.send('Server is running successfully 🚀');
});

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
