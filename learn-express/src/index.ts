import express from "express";
import mongoose from "mongoose";
import routes from "./routes/indexRoutes";
import commentRoutes from './routes/commentRoutes';
import likeRoutes from './routes/likeRoutes';
import queryRoutes from './routes/queryRoutes'

// Connect to MongoDB database
mongoose.connect("mongodb://localhost:27017/micka",)
  .then(() => {
    const app = express();

    app.use(express.json());

    app.use("/api", routes);
    app.use("/api", commentRoutes);
    app.use("/api", likeRoutes);
    app.use("/api", queryRoutes);

    app.listen(9000, () => {
      console.log("Server has started");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


