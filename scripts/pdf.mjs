// Renders /resume/ pages to PDF in public/; run after `npm run build` and commit the PDFs.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';
import { chromium } from 'playwright-core';

const dist = resolve('dist');
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml' };
const server = createServer(async (req, res) => {
  let file = join(dist, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  if ((await stat(file).catch(() => null))?.isDirectory()) file = join(file, 'index.html');
  try {
    res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404).end();
  }
}).listen(0);
const base = `http://localhost:${server.address().port}`;

const browser = await chromium.launch();
const page = await browser.newPage();
for (const [path, out] of [['/resume/', 'Shin-Lin-Resume-zh.pdf'], ['/en/resume/', 'Shin-Lin-Resume-en.pdf']]) {
  await page.goto(base + path, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print', colorScheme: 'light' });
  await page.pdf({ path: join('public', out), format: 'A4', printBackground: true, preferCSSPageSize: true });
  console.log('wrote public/' + out);
}
await browser.close();
server.close();
