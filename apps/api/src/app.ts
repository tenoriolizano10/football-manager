import express, { type Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env.js';

const app: Express = express();

// Seguridad
app.use(helmet());
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));

// Parseo
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default app;