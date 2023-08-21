const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://wasdzexa:PQwtBgX4azuP_vqJmIukcp_RJ39IOxTM@bubble.db.elephantsql.com/wasdzexa';

const client = new Client({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

module.exports = client;
