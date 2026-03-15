const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
const cors = require("cors");
app.use(cors({
  origin: "*" // or your frontend URL
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/item", itemRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
