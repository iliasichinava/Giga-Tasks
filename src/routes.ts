import express from "express";
import { HashController } from "./hash.controller";
import { HashService } from "./hash.service";

const router = express.Router();
const hashController = new HashController(new HashService());

router.post("/md5", hashController.md5.bind(hashController));
router.post("/sha256", hashController.sha256.bind(hashController));
router.get("/sync", hashController.sync.bind(hashController));

export { router };
