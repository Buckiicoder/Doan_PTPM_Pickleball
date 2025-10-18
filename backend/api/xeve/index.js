import express from "express";
import sukienRoutes from "./sukien/index.js";
import datveRoutes from "./datve/index.js";

const router = express.Router();

// ✅ Đường dẫn cho sự kiện
router.use("/sukien", sukienRoutes);

// ✅ Đường dẫn cho đặt vé
router.use("/datve", datveRoutes);

export default router;
