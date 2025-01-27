import express from 'express'
import {
  createExpressMiddleware,
  type CreateExpressContextOptions,
} from '@trpc/server/adapters/express'
import cors from 'cors'
import * as Sentry from '@sentry/node'
import type { Database } from './database'
import { appRouter } from './modules'
import type { Context } from './trpc'
import config from './config'

export default function createApp(db: Database) {
  const app = express()

  app.use(cors())
  app.use(express.json())
  const { dsn } = config.sentry

  if (dsn) {
    Sentry.init({
      dsn,
    })
  }

  // Endpoint for health checks - pinging the server to see if it's alive.
  // This can be used by tests, load balancers, monitoring tools, etc.
  app.use('/api/health', (_, res) => {
    res.status(200).send('OK')
  })

  app.use(
    '/api/v1/trpc',
    createExpressMiddleware({
      createContext: ({ req, res }: CreateExpressContextOptions): Context => ({
        db,
        req,
        res,
      }),
      router: appRouter,
    })
  )

  return app
}
