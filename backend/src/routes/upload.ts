import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import pdf from "pdf-parse"; // ✅ correct import

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = path.join(process.cwd(), req.file.path);
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer); // ✅ correct usage

    fs.unlinkSync(filePath); // delete after reading

    res.json({
      text: data.text,
      info: data.info,
    });
  } catch (error) {
    console.error("Error parsing PDF:", error);
    res.status(500).json({ error: "Failed to parse PDF" });
  }
});

export default router;
