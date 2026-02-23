import { createPool, Pool } from 'mysql2/promise';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(__dirname, '../../.env') });

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env as Record<string, string>;

console.log('Database config loaded:');
console.log('DB_HOST:', DB_HOST);
console.log('DB_PORT:', DB_PORT);
console.log('DB_USER:', DB_USER);
console.log('DB_NAME:', DB_NAME);

let pool: Pool;


export async function getPool(): Promise<Pool> {
  if (!pool) {
    pool = createPool({
      host: DB_HOST,
      port: parseInt(DB_PORT),
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      connectionLimit: 5,
    });
    // simple connectivity check with retries
    let attempts = 0;
    let connected = false;
    const MAX_ATTEMPTS = 10;
    while (attempts < MAX_ATTEMPTS) {
      try {
        const conn = await pool.getConnection();
        conn.release();
        connected = true;
        break;
      } catch (e) {
        attempts++;
        console.error(`Database connection failed (attempt ${attempts}/ ${MAX_ATTEMPTS})`);
        await new Promise(r => setTimeout(r, 1000));
      }
    }

    if (!connected) {
      console.error('Unable to establish database connection after 3 attempts');
      await pool.end();
      throw new Error('Unable to establish database connection after 3 attempts');
    } else {
      console.log('Database connection established');
    }
  }

  return pool;
}





