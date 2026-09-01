import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));

  // Status check for saved portrait
  app.get("/api/portrait-status", (req, res) => {
    const publicPath = path.join(process.cwd(), "public", "joy-photo.jpg");
    const distPath = path.join(process.cwd(), "dist", "joy-photo.jpg");
    const exists = fs.existsSync(publicPath) || fs.existsSync(distPath);
    res.json({ hasPortrait: exists, url: exists ? "/joy-photo.jpg" : null });
  });

  // Permanent upload API to write to public/joy-photo.jpg on server disk
  app.post("/api/upload-portrait", (req, res) => {
    try {
      const { imageBase64 } = req.body;
      if (!imageBase64) {
        return res.status(400).json({ error: "No image provided" });
      }

      const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");

      const publicDir = path.join(process.cwd(), "public");
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      fs.writeFileSync(path.join(publicDir, "joy-photo.jpg"), buffer);

      const distDir = path.join(process.cwd(), "dist");
      if (fs.existsSync(distDir)) {
        fs.writeFileSync(path.join(distDir, "joy-photo.jpg"), buffer);
      }

      console.log("Successfully saved portrait to public/joy-photo.jpg");
      return res.json({ success: true, url: "/joy-photo.jpg" });
    } catch (err: any) {
      console.error("Failed to save portrait:", err);
      return res.status(500).json({ error: err.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
