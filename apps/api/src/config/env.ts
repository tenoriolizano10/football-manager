import dotenv from 'dotenv';
dotenv.config();

const requiredEnvVars = [
  'DATABASE_URL',
  'JWT_SECRET',
] as const;

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

export const env = {
  NODE_ENV: process.env['NODE_ENV'] ?? 'development',
  PORT: parseInt(process.env['PORT'] ?? '3001', 10),
  DATABASE_URL: process.env['DATABASE_URL']!,
  JWT_SECRET: process.env['JWT_SECRET']!,
  JWT_EXPIRES_IN: process.env['JWT_EXPIRES_IN'] ?? '7d',
  CORS_ORIGIN: process.env['CORS_ORIGIN'] ?? 'http://localhost:5173',
} as const;