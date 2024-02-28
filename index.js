import express from "express";
import connectToDb from "./db/index.js";
import router from "./routes/routes.js";
import bodyParser from "body-parser";
import cors from "cors";
const PORT = 3001;

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

Promise.all([connectToDb()])
  .then(() => app.listen(PORT, () => console.log(`server is live`)))
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`);
    process.exit();
  });
