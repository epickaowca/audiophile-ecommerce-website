import express from "express";
import cors from "cors";
import { categories, details } from "./data.js";

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

app.use(express.static("public"));

app.get("/category/:id", (req, res) => {
  const categoryArr = categories[req.params.id];
  if (categoryArr) {
    res.send(categoryArr);
  } else {
    res.status(404).send({ message: "category not found" });
  }
});

app.get("/details/:tagName", (req, res) => {
  const detailsObj = details[req.params.tagName];
  if (detailsObj) {
    res.send(detailsObj);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
