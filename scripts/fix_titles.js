const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);

const CONTENT_DIR = path.join(process.cwd(), 'src/content');

async function processFiles() {
    const dirs = ['cn', 'en'];
    for (const dir of dirs) {
        const dirPath = path.join(CONTENT_DIR, dir);
        const files = await readdir(dirPath);

        for (const file of files) {
            if (file.endsWith('.md')) {
                const fullPath = path.join(dirPath, file);
                let content = await readFile(fullPath, 'utf-8');
                let originalContent = content;

                // 1. Fix Frontmatter Title: title: "[[Term]]" -> title: "Term"
                // Matches title: "[[...]]" or title: '[[...]]'
                content = content.replace(/^title:\s*(["'])\[\[(.*?)\]\]\1/m, (match, quote, term) => {
                    return `title: ${quote}${term}${quote}`;
                });

                // 2. Fix H1 Header: # [[Term]]... -> # Term...
                // Only replace the FIRST occurrence in the H1 line to avoid breaking intentional links later in the title?
                // User said "Title does not need Wiki Link".
                // Usually H1 is just the title.
                // Let's remove [[ and ]] from the H1 line entirely? 
                // Or just if it wraps the whole thing?
                // Example: "# [[GitHub Codespaces]]: The Cloud Base" -> "# GitHub Codespaces: The Cloud Base"

                content = content.replace(/^#\s+(.*)$/m, (match, headerContent) => {
                    // Remove all [[ and ]] from the header
                    return '# ' + headerContent.replace(/\[\[/g, '').replace(/\]\]/g, '');
                });

                if (content !== originalContent) {
                    console.log(`Fixing titles in ${file}...`);
                    await writeFile(fullPath, content, 'utf-8');
                }
            }
        }
    }
}

processFiles().catch(console.error);
