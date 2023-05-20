import { router } from "../trpc";
import { postRouter } from "./post/post";
import { userRouter } from "./user/user";

export const appRouter = router({
  post: postRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
