import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import dotenv from "dotenv";

import loginRoutes from "./routes/login-routes.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/api/user", router);
app.use("/api/login", loginRoutes);
//http://localhost:8080/api/user
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://admin:nandini@cluster0.vrd0ry1.mongodb.net/personalitydata?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
