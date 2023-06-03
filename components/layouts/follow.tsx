import ContentLayout from "components/shared/content-layout/content-layout";
import Modes from "components/shared/mode/modes";
import SmallProfileHeader from "components/shared/profile-header/small-profile-header";
import { getProfileData } from "~/util/profile";
import { useRouter } from "next/router";

const FollowLayout = ({
  children,
  username,
}: {
  children: React.ReactNode;
  username: string;
}) => {
  const router = useRouter();
  const pathname = router.pathname;
  const location = pathname.split("/").filter(Boolean);

  const setProfileMode = (mode: string) => {
    const newPath = `/${username}/${mode}`;
    router.push(newPath);
  };
  const currentMode = location.slice(-1)[0] ?? "";
  const profile = getProfileData(username)!;
  return (
    <ContentLayout
      headerContent={<SmallProfileHeader profile={profile} />}
      className="h-screen"
    >
      <div className="my-6 h-screen border-[1px] border-seperator">
        <Modes
          setMode={setProfileMode}
          mode={currentMode}
          modes={["followers", "following"]}
        />
        {children}
      </div>
    </ContentLayout>
  );
};

export default FollowLayout;
