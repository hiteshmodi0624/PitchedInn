import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
  appId: "1633021",
  secret: "553a403abab56e09dbbe",
  key: "63e75d93f2f83e4104d5",
  cluster: "ap2",
  useTLS: true,
});
export const pusherClient = new PusherClient(
  "63e75d93f2f83e4104d5",
  {
    cluster: "ap2",
  }
);
