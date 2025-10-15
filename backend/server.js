import express from "express";
import cors from "cors";
import apiRouter from "./api/index.js";

const app = express();

app.use(cors());
app.use(express.json());

// Định tuyến API
app.use("/api", apiRouter);

// Kiểm tra server
app.get("/", (req, res) => {
  res.send("✅ Pickleball Backend đang chạy!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
