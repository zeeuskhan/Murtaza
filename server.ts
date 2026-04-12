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

  let vite: any;
  if (process.env.NODE_ENV !== "production") {
    // Development mode: Use Vite middleware with custom SPA fallback
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    // Production mode: Serve static files
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
  }

  // SPA Fallback: This handles all routes that don't match a static file
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    const method = req.method;
    const accept = req.headers.accept || '';

    // Only handle GET requests that expect HTML
    // We skip if it's an API call or if it looks like a static asset (has extension) 
    // UNLESS it explicitly accepts HTML (which means it's a page reload/direct navigation)
    const isApi = url.startsWith('/api/');
    const hasExtension = url.includes('.');
    const acceptsHtml = accept.includes('text/html') || accept.includes('*/*');

    if (method !== 'GET' || isApi || (hasExtension && !acceptsHtml)) {
      return next();
    }

    try {
      if (process.env.NODE_ENV !== "production") {
        // Dev mode: Read index.html, transform it with Vite, and serve it
        let template = fs.readFileSync(
          path.resolve(process.cwd(), 'index.html'),
          'utf-8'
        );
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } else {
        // Production mode: Serve the built index.html
        const indexPath = path.join(process.cwd(), 'dist', 'index.html');
        if (fs.existsSync(indexPath)) {
          res.sendFile(indexPath);
        } else {
          res.status(404).send('Not Found');
        }
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
