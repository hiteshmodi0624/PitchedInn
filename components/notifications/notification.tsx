"use client";
import { FC } from "react";
import Link from "next/link";
import ProfilePicture from "components/shared/account/profile-picture";
import { trpc } from "~/utils/trpc";
import { useRouter } from "next/router";
import { NotificationProcedure } from "~/server/routers/user/notification/notification";
import Image from "next/image";

const Notification: FC<{
  notification: NotificationProcedure<"getUserNotificationById">;
}> = ({ notification }) => {
  if (!notification) return <div></div>;
  const user = trpc.user.getUserInfo.useQuery({ id: notification.notifierId });
  if (!user.data) {
    return <div></div>;
  }
  const imageURL =
    notification.collect?.post.mediaUrl[0] ??
    notification.comment?.post.mediaUrl[0] ??
    notification.like?.post.mediaUrl[0];
  const postID =
    notification.collect?.post.id ??
    notification.comment?.post.id ??
    notification.like?.post.id;
  return (
    <Link
      className="relative flex flex-grow items-center justify-start"
      href={`${postID ? postID : user.data.username}`}
    >
      <ProfilePicture className="h-12 w-12" profilePic={user.data.image} />
      <div className="m-2 w-full ">
        <div className="flex items-center justify-between space-x-2 text-grey">
          <h2 className="text-base font-bold text-white">
            {user.data.username}{" "}
            {notification.action === "FOLLOW" && (
              <span className="font-extralight">
                has started to follow you.
              </span>
            )}
            {notification.action === "LIKE" && (
              <span className="font-extralight">has liked your post.</span>
            )}
            {notification.action === "COLLECT" && (
              <span className="font-extralight">has collected your post.</span>
            )}
            {notification.action === "COMMENT" && (
              <span className="font-extralight">has commented your post.</span>
            )}
          </h2>
          {imageURL && (
            <span className={`relative flex justify-center h-20 w-20 p-2 bg-gray`}>
              <Image
                width={300}
                height={300}
                alt={"notificationImage"}
                src={imageURL}
                style={{ objectFit: "scale-down" }}
              />
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Notification;
