const fs = require('fs');
const path = require('path');
const { DatabaseSync } = require('node:sqlite');

const dbPath = path.join(__dirname, '../database/database.sqlite');

// Remove existing empty file if present
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
// Password is bcrypt hash for 'am9790@@'
const passwordHash = '$2y$12$1pEBcYujjzsWi.w.fs0Nh.UsF/TvA7WSy9s.cxbYAVvB/bfNykWDC';

const stmt = db.prepare(`
INSERT INTO users (name, email, email_verified_at, password, created_at, updated_at)
VALUES (?, ?, ?, ?, ?, ?)
`);

stmt.run('ADMIN', 'vmakitec@gmail.com', now, passwordHash, now, now);

// Insert migration entries
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

db.close();
console.log('Database database/database.sqlite successfully created and populated!');
