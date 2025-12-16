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

                // 1. Fix Quadruple Brackets [[[[...]]]] -> [[...]]
                // Loop until no more quadruple brackets (in case of sextuple etc)
                while (content.includes('[[[[') && content.includes(']]]]')) {
                    content = content.replace(/\[\[\[\[(.*?)\]\]\]\]/g, '[[$1]]');
                }

                // 2. Fix Title: title: "[[Term]]" -> title: "Term"
                // Handle both double and single quotes
                content = content.replace(/^title:\s*"\[\[(.*?)\]\]"/m, 'title: "$1"');
                content = content.replace(/^title:\s*'\[\[(.*?)\]\]'/m, "title: '$1'");

                // 3. Fix Headers: # [[Term]] -> # Term
                // Regex for Headers #, ##, ### etc.
                content = content.replace(/^(#+)\s*\[\[(.*?)\]\]/gm, '$1 $2');

                // 4. Fix Headers containing [[Term]]: ## 什么是 [[React]]? -> ## 什么是 React?
                // This is specifically for headers where the term is just PART of the header
                // Find lines starting with #
                content = content.replace(/^(#+.*?)\[\[(.*?)\]\](.*)$/gm, (match, prefix, term, suffix) => {
                    return `${prefix}${term}${suffix}`;
                });

                // Repeatedly clean headers in case of multiple links? 
                // e.g. ## [[A]] vs [[B]]
                // Simple loop for headers:
                content = content.replace(/^(#+.*)\[\[(.*?)\]\]/gm, '$1$2');


                if (content !== originalContent) {
                    console.log(`Cleaning links in ${file}...`);
                    await writeFile(fullPath, content, 'utf-8');
                }
            }
        }
    }
}

processFiles().catch(console.error);
