import express from "express";
import khachhangRouter from "./khachhang/index.js";
import sanRouter from "./san/index.js"; // nếu có

const router = express.Router();

router.use("/khachhang", khachhangRouter);
router.use("/san", sanRouter);

export default router;

// index tổng