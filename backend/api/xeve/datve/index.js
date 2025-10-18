import express from "express";
import { postDatVe } from "./postDatVe.js";

const router = express.Router();

// ✅ Thêm đặt vé mới
router.post("/", postDatVe);

export default router;
