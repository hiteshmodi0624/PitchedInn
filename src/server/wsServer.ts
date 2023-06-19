import { applyWSSHandler } from '@trpc/server/adapters/ws';
import ws from 'ws';
import { appRouter } from './routers/route';
import { createContext } from './trpc';

export const wss = new ws.Server({
  port: 3001,
});
const handler = applyWSSHandler({ wss, router: appRouter, createContext });

wss.on('connection', (ws) => {
  ws.once('close', () => {
  });
});

process.on('SIGTERM', () => {
  handler.broadcastReconnectNotification();
  wss.close();
});