// External packages
import express from "express";
import dotenv from "dotenv";

// Internal modules
import connectDB from "./config/db.js";
import indexRoute from "./routes/indexRoute.js";
import shortRoutes from "./routes/shortRoutes.js";

// env configure
dotenv.config();

// DB connection
connectDB();

// initialize app
const app = express();

// parsing middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/", indexRoute,);
app.use("/api/v1/short-url", shortRoutes);

// Port config
const PORT = process.env.PORT;

// Listen the request
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
