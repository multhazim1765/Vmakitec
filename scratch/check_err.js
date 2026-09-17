const fs = require('fs');

async function check() {
    const res = await fetch('https://vmakitec.vercel.app');
    const html = await res.text();
    fs.writeFileSync('scratch/err.html', html);
    
    // Find exception title / message
    const lines = html.split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('exception') || lines[i].includes('Error') || lines[i].includes('SQLSTATE') || lines[i].includes('InvalidArgumentException') || lines[i].includes('RuntimeException')) {
            console.log(`Line ${i}: ${lines[i].trim().substring(0, 150)}`);
        }
    }
}
check();
