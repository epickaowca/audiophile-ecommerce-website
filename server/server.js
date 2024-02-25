import express from "express";
import cors from "cors";
import { categories } from "./data.js";

const app = express();
const PORT = 3002;
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";
const corsOptions = {
  origin: corsOrigin,
  optionsSuccessStatus: 200,
};

if (corsOptions == "*") {
  app.use(cors());
} else {
  app.use(cors(corsOptions));
}

app.get("/category/:id", (req, res) => {
  const categoryArr = categories[req.params.id];
  if (categoryArr) {
    res.send(categoryArr);
  } else {
    res.status(404).send({ message: "category not found" });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
