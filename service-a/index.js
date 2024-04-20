import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

const APP_PREFIX = process.env.APP_PREFIX || "/service-a";
const PORT = process.env.PORT || 8080;

const __dirname = dirname(fileURLToPath(import.meta.url));

const router = express.Router();
router.use(express.static(path.join(__dirname, "src")));

app.use(APP_PREFIX, router);

app.listen(PORT, () =>
  console.log(`app is listening on http://localhost:${PORT}${APP_PREFIX}`)
);
