import ProfileSettingsForm from "components/settings/profile/settings-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { trpc } from '~/utils/trpc';
export default function ProfileSettings() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") return <></>;
  if (status === "unauthenticated" || !session || !session.user.username) {
    router.replace("/404");
    return <></>;
  }
  const profileQuery = trpc.user.getUserInfo.useQuery({
    username: session.user.username,
  });
  if (!profileQuery.data) return <></>;
  return (
    <>
        <div
          className={`relative flex cursor-default overflow-scroll rounded-xl 
          !bg-black text-center`}
        >
          <ProfileSettingsForm profile={profileQuery.data}/>
        </div>
    </>
  );
}
