import { initTRPC } from '@trpc/server'
import type { Request, Response } from 'express'
import * as Sentry from '@sentry/node'
import type { AuthUser } from '@server/entities/user'
import type { Database } from '@server/database'
import SuperJSON from 'superjson'
import { ZodError } from 'zod'
import { fromZodError } from 'zod-validation-error'

export type Context = {
  db: Database
  req?: Request
  res?: Response

  // We can also add our own custom context properties.
  authUser?: AuthUser
}

export type ContextMinimal = Pick<Context, 'db'>

const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
  errorFormatter(opts) {
    const { shape, error } = opts

    if (error.cause instanceof ZodError) {
      const validationError = fromZodError(error.cause)

      return {
        ...shape,
        data: {
          message: validationError.message,
        },
      }
    }

    return shape
  },
})

export const sentryMiddleware = t.middleware(
  Sentry.Handlers.trpcMiddleware({
    attachRpcInput: true,
  })
)

export const publicProcedure = t.procedure.use(sentryMiddleware)

export const { middleware, router, mergeRouters } = t
