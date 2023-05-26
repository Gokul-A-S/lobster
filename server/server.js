const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const equipmentRoutes = require("./routes/Equipments");
const UserRoutes = require("./routes/User");
const { connectDB } = require('./connectDB/connect')
dotenv.config();


connectDB();
app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${new Date().toString()}`);
  next();
});


app.use("/api/equipments", equipmentRoutes);
app.use("/api/user",UserRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
