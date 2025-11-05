import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  res.json({ message: "Export Resume route working" });
});

export default router;
