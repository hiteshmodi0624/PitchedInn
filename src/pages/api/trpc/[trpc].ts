import { appRouter } from "src/server/routers/route"
import { createContext } from "src/server/trpc"
import * as trpcNext from "@trpc/server/adapters/next"


const handler = trpcNext.createNextApiHandler({
    router:appRouter,
    createContext
}) 
export {handler as GET, handler as POST}