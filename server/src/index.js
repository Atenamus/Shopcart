import dotenv from "dotenv";
import app from "./app.js";
import connectDb from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.log("App error:", error);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running at port:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDb Connection failed ! ", error);
  });
