// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const authRoutes = require("./routes/authRoutes");
// const categoryRoutes = require("./routes/categoryRoutes");
// const itemRoutes = require("./routes/itemRoutes");

// const app = express();

// app.use(cors({
//   origin: "https://frontend-tau-two-t7wdr2wdq5.vercel.app",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   // credentials: true
// }));
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Backend is running!");
// });


// app.use("/api/auth", authRoutes);
// app.use("/api/category", categoryRoutes);
// app.use("/api/item", itemRoutes);

// mongoose.connect(process.env.MONGO_URI)
// .then(()=>console.log("MongoDB Connected"))
// .catch(err=>console.log(err));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on ${PORT}`));



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import Routes
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

// --- CORS CONFIGURATION ---
const allowedOrigins = [
  "https://frontend-tau-two-t7wdr2wdq5.vercel.app",
  "https://frontend-rmanhas-projects.vercel.app",
  "http://localhost:3000" // Added for local development
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or Postman)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
// ---------------------------

app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/item", itemRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
