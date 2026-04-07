import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const RSS_URL = 'https://virtualchaos.substack.com/feed';
const OUTPUT = join(__dirname, '..', 'src', 'data', 'articles.json');

async function fetchArticles() {
  console.log('Fetching Substack RSS feed...');
  const res = await fetch(RSS_URL);
  if (!res.ok) {
    console.warn(`RSS fetch failed (${res.status}), using empty articles`);
    writeFileSync(OUTPUT, '[]');
    return;
  }
  const xml = await res.text();
  const articles = parseRSS(xml);
  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, JSON.stringify(articles, null, 2));
  console.log(`Wrote ${articles.length} articles to ${OUTPUT}`);
}

function parseRSS(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];
    const title = extractTag(block, 'title');
    const link = extractTag(block, 'link');
    const description = extractTag(block, 'description');
    const pubDate = extractTag(block, 'pubDate');
    if (title && link) {
      items.push({
        title: decodeHTML(title),
        link,
        description: decodeHTML(stripHTML(description || '')).slice(0, 200),
        date: pubDate ? new Date(pubDate).toISOString().split('T')[0] : null,
      });
    }
  }
  return items;
}

function extractTag(xml, tag) {
  const cdataMatch = xml.match(new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`));
  if (cdataMatch) return cdataMatch[1];
  const simpleMatch = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return simpleMatch ? simpleMatch[1] : null;
}

function stripHTML(str) {
  return str.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function decodeHTML(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#x27;/g, "'");
}

fetchArticles().catch((err) => {
  console.error('Failed to fetch articles:', err.message);
  writeFileSync(OUTPUT, '[]');
});
