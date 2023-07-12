import { FC, FormEvent, useEffect, useState } from "react";
import Button from "../../ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { trpc } from "~/utils/trpc";
const FollowButton: FC<{
  className?: string;
  username: string;
  setFollowValue?: (value: boolean) => void;
}> = ({ className, username, setFollowValue }) => {
  const { data: session } = useSession();
  const followUser = trpc.user.follow.followUser.useMutation();
  const follow = trpc.user.follow.isFollowing.useQuery({ username });
  const [isFollowing, setIsFollowing] = useState<undefined | boolean>(
    undefined
  );
  const router = useRouter();
  const followHandler = async (event:FormEvent) => {
    event.preventDefault()
    if (!session) router.push("auth/login");
    else {
      followUser.mutate({ username });
      if (isFollowing !== undefined && setFollowValue) {
        setFollowValue(!isFollowing);
      }
      setIsFollowing((prev) => {
        return !prev;
      });
        
    }
  };
  useEffect(() => {
    if (
      isFollowing === undefined &&
      follow.isFetched &&
      follow.data !== undefined
    )
      setIsFollowing(follow.data);
  }, [follow, isFollowing]);
  if (follow.data === undefined||session?.user.username===username) return <div></div>;
  return (
    <Button
      onClickHandler={followHandler}
      name={isFollowing ? "Unfollow" : "Follow"}
      className={className}
      buttonClasses="bg-white text-gray text-sm font-bold hover:opacity-90 hover:bg-white"
    />
  );
};
export default FollowButton;