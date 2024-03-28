import express from "express";
import cors from "cors";
import { categories, details, gallery } from "./data.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3002;
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

app.get("/details/:tagName", (req, res) => {
  const detailsObj = details[req.params.tagName];
  if (detailsObj) {
    res.send(detailsObj);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});

app.get("/gallery/:tagName", (req, res) => {
  const galleryObj = gallery[req.params.tagName];
  if (galleryObj) {
    res.send(galleryObj);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});

const correctPath = path.join(__dirname, "public");
app.use("/public", express.static(correctPath));

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
