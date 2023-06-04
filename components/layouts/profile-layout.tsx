import { useRouter, usePathname, notFound } from "next/navigation";
import React from "react";
import { getProfileData } from "src/util/profile";
import Modes from "components/shared/mode/modes";
import ProfileData from "../profiles/profile-data/profile-data";
import { trpc } from "~/utils/trpc";

const ProfileLayout = ({
  children,
  username,
}: {
  children: React.ReactNode;
  username: string;
}) => {
  const router = useRouter();
  const pathname = usePathname() as string;
  const location = pathname.split("/").filter(Boolean);

  const profileQuery=trpc.user.getUserInfoFromUsername.useQuery({username})
  const profile=profileQuery.data;

  if (!profile) {
    return <></>;
  }

  const modes: string[] = [];

  if (profile.userType === "Business" || profile.userType === "Investor")
    modes.push("about");
  if (profile.userType === "Business" || profile.userType === "Collector") {
    modes.push("posts", "pitches");
  }
  const setProfileMode = (mode: string) => {
    const newPath = mode === "posts" ? `/${username}` : `/${username}/${mode}`;
    return router.push(newPath);
  };

  const currentMode =
    location[1] !== undefined
      ? location[1]
      : modes.includes("posts")
      ? "posts"
      : modes[0] ?? "";
  return (
    <div className="h-screen">
      <ProfileData profile={profile} />
      {modes.length !== 0 && (
        <Modes setMode={setProfileMode} mode={currentMode} modes={modes} />
      )}
      <section className="pb-1">{children}</section>
    </div>
  );
};

export default ProfileLayout;