const fs = require('fs');

async function check() {
    const res = await fetch('https://vmakitec.vercel.app');
    const html = await res.text();
    fs.writeFileSync('scratch/err.html', html);
    
    console.log('Saved html to scratch/err.html');
    const lines = html.split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('Exception') || lines[i].includes('Error') || lines[i].includes('SQLSTATE') || lines[i].includes('message') || lines[i].includes('title')) {
            if (lines[i].length < 200) {
                console.log(`Line ${i}: ${lines[i].trim()}`);
            }
        }
    }
}
check();
