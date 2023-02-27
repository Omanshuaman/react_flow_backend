const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoute = require("./routes/productRoutes");
const cors = require("cors");

dotenv.config();
connectDB();
const app = express();
app.use(express.json()); // to accept json data

app.use(
  cors({
    origin: "https://react-flow-backend.onrender.com",

    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("API Running!");
});
app.use("/api/product", productRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on PORT ${PORT}...`));
