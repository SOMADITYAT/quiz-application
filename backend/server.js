import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import connectDB from "./config/db.js";
import quizRoutes from "./routes/quizRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.use("/api", quizRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgGreen.bold);
});
