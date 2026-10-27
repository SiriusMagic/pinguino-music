// Servidor estático mínimo para las pruebas: sirve dist/ y devuelve index.html en rutas de la app.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const ROOT = join(import.meta.dirname, "..", "dist");
const PORT = Number(process.env.PORT || 4173);
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".ttf": "font/ttf", ".woff2": "font/woff2" };

createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^(\.\.[/\\])+/, "");
  for (const file of [join(ROOT, path), join(ROOT, "index.html")]) {
    try {
      const body = await readFile(file);
      res.writeHead(200, { "Content-Type": TYPES[extname(file)] || "application/octet-stream" });
      return res.end(body);
    } catch { /* probar el siguiente */ }
  }
  res.writeHead(404).end();
}).listen(PORT, () => console.log(`Sirviendo dist/ en http://localhost:${PORT}`));
