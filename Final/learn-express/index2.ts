import express from "express";
import mongoose from "mongoose";
import routes from "./src/routes/index";

// Connect to MongoDB database
mongoose.connect("mongodb://localhost:27017/micka",)
  .then(() => {
    const app = express();

    app.use(express.json());

    app.use("/api", routes);

    app.listen(9000, () => {
      console.log("Server has started");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


