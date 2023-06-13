import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Modes from "components/shared/mode/modes";
import ProfileData from "../profiles/profile-data/profile-data";
import { trpc } from "~/utils/trpc";
import ContentLayout from "../shared/content-layout/content-layout";
import SmallProfileHeader from "components/shared/profile-header/small-profile-header";
import Card from "components/ui/card";
import { useRouter } from "next/router";

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
  const profileQuery = trpc.user.getUserInfo.useQuery({ username });
  const profile = profileQuery.data;
  if (!profile) {
    return <div></div>;
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
    <ContentLayout
      headerContent={<SmallProfileHeader profile={profile} />}
      className="h-screen"
    >
      <Card className="mt-6 w-full mb-6">
        <ProfileData profile={profile} />
        {modes.length !== 0 && (
          <Modes setMode={setProfileMode} mode={currentMode} modes={modes} />
        )}
        <section className="pb-1">{children}</section>
      </Card>
    </ContentLayout>
  );
};

export default ProfileLayout;
