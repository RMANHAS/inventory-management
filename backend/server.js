const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

app.use(cors({
  origin: "https://frontend-tau-two-t7wdr2wdq5.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  // credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running!");
});


app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/item", itemRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
