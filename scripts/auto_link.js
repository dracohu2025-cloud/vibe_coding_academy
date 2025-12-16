const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);

const CONTENT_DIR = path.join(process.cwd(), 'src/content');
const WIKI_PREFIX = 'wiki_';

async function getWikiTerms() {
    const terms = new Map();
    const dirs = ['cn', 'en'];

    for (const dir of dirs) {
        const files = await readdir(path.join(CONTENT_DIR, dir));
        for (const file of files) {
            if (file.startsWith(WIKI_PREFIX) && file.endsWith('.md')) {
                const content = await readFile(path.join(CONTENT_DIR, dir, file), 'utf-8');
                const titleMatch = content.match(/^title:\s*"(.+)"/m);
                if (titleMatch) {
                    const title = titleMatch[1];
                    const slug = file.replace('.md', '');
                    if (!terms.has(title)) {
                        terms.set(title, new Set());
                    }
                    terms.get(title).add(slug);
                }
            }
        }
    }
    return terms;
}

async function processFiles() {
    const terms = await getWikiTerms();
    console.log('Found wiki terms:', [...terms.keys()]);

    const dirs = ['cn', 'en'];
    for (const dir of dirs) {
        const dirPath = path.join(CONTENT_DIR, dir);
        const files = await readdir(dirPath);

        for (const file of files) {
            if (file.endsWith('.md')) { // Process all markdown files
                // Skip if it is not a content file we want to patch? 
                // Actually we want to patch ALL files, even other wikis could link to wikis.

                const fullPath = path.join(dirPath, file);
                let content = await readFile(fullPath, 'utf-8');
                let originalContent = content;

                for (const [term, slugs] of terms) {
                    // Simple regex to find the term not already inside a link
                    // proper markdown link check is hard with regex, involves lookbehinds etc.
                    // simplified: look for Term that is not preceded by [ and not followed by ]

                    // We want to link "Term" -> "[[Term]]"
                    // Only if it is strictly the Term (case insensitive? User used 'GitHub Codespaces' exact match in request)
                    // Let's stick to exact match or known variations if needed.

                    const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    // Negative lookbehind (?<!\[) ensures not starting with [
                    // Negative lookahead (?![^\[]*\]) is tricky for nested, let's just check immediate context
                    // (?<!\[\[)Term(?!\]\]) prevents double linking [[Term]]
                    // Also avoid linking inside existing markdown links [Term](...)

                    const regex = new RegExp(`(?<!\\[|\\/)(?<!\\[\\[)${escapedTerm}(?!\\]\\])(?!\\])(?!\\))`, 'g');

                    content = content.replace(regex, `[[${term}]]`);
                }

                if (content !== originalContent) {
                    console.log(`Updating ${file}...`);
                    await writeFile(fullPath, content, 'utf-8');
                }
            }
        }
    }
}

processFiles().catch(console.error);
