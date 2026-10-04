const fs = require('fs');
const path = require('path');
const { DatabaseSync } = require('node:sqlite');

const dbPath = path.join(__dirname, '../database/database.sqlite');

if (fs.existsSync(dbPath)) {
    fs.unlinkSync(dbPath);
}

const db = new DatabaseSync(dbPath);

console.log('Creating SQLite tables...');

db.exec(`
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    email_verified_at TEXT,
    password TEXT NOT NULL,
    remember_token TEXT,
    created_at TEXT,
    updated_at TEXT
);

CREATE TABLE password_reset_tokens (
    email TEXT PRIMARY KEY,
    token TEXT NOT NULL,
    created_at TEXT
);

CREATE TABLE sessions (
    id TEXT PRIMARY KEY,
    user_id INTEGER,
    ip_address TEXT,
    user_agent TEXT,
    payload TEXT NOT NULL,
    last_activity INTEGER NOT NULL
);

CREATE INDEX idx_sessions_user_id ON sessions(user_id);
CREATE INDEX idx_sessions_last_activity ON sessions(last_activity);

CREATE TABLE cache (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    expiration INTEGER NOT NULL
);

CREATE TABLE cache_locks (
    key TEXT PRIMARY KEY,
    owner TEXT NOT NULL,
    expiration INTEGER NOT NULL
);

CREATE TABLE jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    queue TEXT NOT NULL,
    payload TEXT NOT NULL,
    attempts INTEGER NOT NULL,
    reserved_at INTEGER,
    available_at INTEGER NOT NULL,
    created_at INTEGER NOT NULL
);

CREATE TABLE job_batches (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    total_jobs INTEGER NOT NULL,
    pending_jobs INTEGER NOT NULL,
    failed_jobs INTEGER NOT NULL,
    failed_job_ids TEXT NOT NULL,
    options TEXT,
    cancelled_at INTEGER,
    created_at INTEGER NOT NULL,
    finished_at INTEGER
);

CREATE TABLE failed_jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    uuid TEXT NOT NULL UNIQUE,
    connection TEXT NOT NULL,
    queue TEXT NOT NULL,
    payload TEXT NOT NULL,
    exception TEXT NOT NULL,
    failed_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    icon_svg TEXT,
    features TEXT,
    starting_price TEXT,
    created_at TEXT,
    updated_at TEXT
);

CREATE TABLE projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_name TEXT NOT NULL,
    industry TEXT,
    challenge TEXT,
    solution TEXT,
    outcome TEXT,
    tech_stack TEXT,
    link TEXT,
    image_path TEXT,
    created_at TEXT,
    updated_at TEXT
);

CREATE TABLE leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    service TEXT NOT NULL,
    budget TEXT,
    description TEXT NOT NULL,
    created_at TEXT,
    updated_at TEXT
);

CREATE TABLE case_studies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT,
    updated_at TEXT
);

CREATE TABLE blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT,
    updated_at TEXT
);

CREATE TABLE seo_metadata (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT,
    updated_at TEXT
);

CREATE TABLE personal_access_tokens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tokenable_type TEXT NOT NULL,
    tokenable_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    token TEXT NOT NULL UNIQUE,
    abilities TEXT,
    last_used_at TEXT,
    expires_at TEXT,
    created_at TEXT,
    updated_at TEXT
);

CREATE TABLE testimonials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_name TEXT NOT NULL,
    role TEXT,
    company_name TEXT,
    project_name TEXT,
    feedback TEXT NOT NULL,
    rating INTEGER NOT NULL DEFAULT 5,
    is_approved INTEGER NOT NULL DEFAULT 0,
    created_at TEXT,
    updated_at TEXT
);

CREATE TABLE migrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    migration TEXT NOT NULL,
    batch INTEGER NOT NULL
);
`);

console.log('Inserting admin user...');

const now = new Date().toISOString();
const passwordHash = '$argon2id$v=19$m=65536,t=4,p=1$T2w4cDlUNmJuQkgyZ25lMg$AMozLBS6LeMii7hSdTCI4OVaClwTOC7fdBVX4+LqtJw';

const stmt = db.prepare(`
INSERT INTO users (name, email, email_verified_at, password, created_at, updated_at)
VALUES (?, ?, ?, ?, ?, ?)
`);

stmt.run('ADMIN', 'vmakitec@gmail.com', now, passwordHash, now, now);

const migrations = [
    '0001_01_01_000000_create_users_table',
    '0001_01_01_000001_create_cache_table',
    '0001_01_01_000002_create_jobs_table',
    '2026_08_15_080044_create_services_table',
    '2026_08_15_080045_create_projects_table',
    '2026_08_15_080046_create_leads_table',
    '2026_08_15_080047_create_case_studies_table',
    '2026_08_15_080048_create_blog_posts_table',
    '2026_08_15_080049_create_seo_metadata_table',
    '2026_08_15_080422_create_personal_access_tokens_table',
    '2026_09_16_165539_create_testimonials_table',
    '2026_09_16_171710_add_is_approved_to_testimonials_table'
];

const migStmt = db.prepare('INSERT INTO migrations (migration, batch) VALUES (?, 1)');
for (const m of migrations) {
    migStmt.run(m);
}


console.log('Inserting default services...');

const servicesData = [
    {
        title: 'Web Development',
        icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>',
        features: JSON.stringify([
            'Responsive & Modern UI/UX',
            'Full-Stack Web Applications (React, Next.js, Laravel)',
            'SEO & Speed Optimization',
            'Custom CMS & API Integration'
        ]),
        starting_price: '₹13,999'
    },
    {
        title: 'Mobile App Development',
        icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>',
        features: JSON.stringify([
            'Cross-Platform iOS & Android Apps',
            'Custom Native Mobile Features & APIs',
            'Smooth & High-Performance UI',
            'App Store & Google Play Store Deployment'
        ]),
        starting_price: '₹14,999'
    },
    {
        title: 'AI Solutions',
        icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12L2.1 12"/><path d="M12 12l4.3-7.5"/></svg>',
        features: JSON.stringify([
            'Custom AI Chatbots & Intelligent Assistants',
            'LLM & OpenAI API Integration',
            'Workflow & Business Automation',
            'Machine Learning Models & Data Analytics'
        ]),
        starting_price: '₹14,999'
    },
    {
        title: 'Data Analytics',
        icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>',
        features: JSON.stringify([
            'Interactive BI Dashboards & Visualizations',
            'Data Cleaning, ETL & Processing',
            'Automated Business Reports',
            'KPI Tracking & Predictive Analytics'
        ]),
        starting_price: '₹12,999'
    },
    {
        title: 'UI/UX Design',
        icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.74 1.7-1.67 0-.44-.19-.84-.46-1.14-.27-.32-.44-.73-.44-1.19 0-.93.75-1.7 1.7-1.7h2.5c2.76 0 5-2.24 5-5 0-4.97-4.48-9-10-9z"/></svg>',
        features: JSON.stringify([
            'High-Fidelity Wireframes & Prototypes',
            'User Experience & Journey Optimization',
            'Mobile-First Design Systems',
            'Interactive Component Libraries'
        ]),
        starting_price: '₹12,999'
    },
    {
        title: 'Digital Transformation',
        icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
        features: JSON.stringify([
            'Business Process Automation',
            'Cloud Infrastructure & Migration Guidance',
            'Legacy System Modernization',
            'Custom Enterprise Workflow Management'
        ]),
        starting_price: '₹14,999'
    }
];

const serviceStmt = db.prepare(`
INSERT INTO services (title, icon_svg, features, starting_price, created_at, updated_at)
VALUES (?, ?, ?, ?, ?, ?)
`);

for (const s of servicesData) {
    serviceStmt.run(s.title, s.icon_svg, s.features, s.starting_price, now, now);
}

db.close();
console.log('SUCCESS! Database database/database.sqlite created and populated!');
