const fs = require('fs');
const html = fs.readFileSync('scratch/err.html', 'utf8');

// Find all occurrences of exception class or message in script tags
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
for (const s of scripts) {
    if (s.includes('class') || s.includes('exception') || s.includes('Illuminate')) {
        const text = s.replace(/<[^>]+>/g, '');
        const idx = text.indexOf('exception');
        if (idx !== -1) {
            console.log('FOUND EXCEPTION CONTEXT:');
            console.log(text.substring(idx - 100, idx + 400));
        }
    }
}

// Check plain body text
const body = html.replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ');
console.log('BODY PLAIN TEXT (first 500 chars):');
console.log(body.replace(/\s+/g, ' ').substring(0, 500));
