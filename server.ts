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

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Handle .html redirects/rewrites for backward compatibility
  app.use((req, res, next) => {
    if (req.path.endsWith('.html') && req.path !== '/index.html') {
      const newPath = req.path.slice(0, -5);
      return res.redirect(301, newPath);
    }
    next();
  });

  // SPA Rewrite: For GET requests that accept HTML and don't have a file extension,
  // rewrite the URL to /index.html so that Vite or the static server handles it as an SPA.
  app.use((req, res, next) => {
    if (
      req.method === 'GET' && 
      req.headers.accept?.includes('text/html') && 
      !req.path.includes('.') &&
      !req.path.startsWith('/api/')
    ) {
      req.url = '/index.html';
    }
    next();
  });

  if (process.env.NODE_ENV !== "production") {
    // Development mode: Use Vite middleware with SPA fallback
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa", // This handles SPA fallback automatically in dev
    });
    app.use(vite.middlewares);
  } else {
    // Production mode: Serve static files and fallback to index.html
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    
    // SPA Fallback for production
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
