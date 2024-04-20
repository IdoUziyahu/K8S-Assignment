import express from "express";
const app = express();

const APP_PREFIX = process.env.APP_PREFIX || "/";
const PORT = process.env.PORT || 8080;

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Microsoft!");
});

app.use(APP_PREFIX, router);

app.listen(PORT, () =>
  console.log(`app is listening on http://localhost:${PORT}${APP_PREFIX}`)
);
