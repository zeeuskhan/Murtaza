import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes can go here if needed
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Handle .html redirects/rewrites for backward compatibility
  // Move this BEFORE static/vite middleware to ensure redirects happen first
  app.use((req, res, next) => {
    if (req.path.endsWith('.html') && req.path !== '/index.html') {
      const newPath = req.path.slice(0, -5);
      return res.redirect(301, newPath);
    }
    next();
  });

  let vite: any;
  if (process.env.NODE_ENV !== "production") {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
  }

  // SPA Fallback
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      if (process.env.NODE_ENV !== "production") {
        // Dev mode fallback
        let template = fs.readFileSync(
          path.resolve(process.cwd(), 'index.html'),
          'utf-8'
        );
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } else {
        // Production mode fallback
        res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
      }
    } catch (e) {
      if (process.env.NODE_ENV !== "production") {
        vite.ssrFixStacktrace(e as Error);
      }
      next(e);
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
