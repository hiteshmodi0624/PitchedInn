import { useRouter } from "next/router";
import ProfileLayout from "components/layouts/profile-layout";
import { setProgressBarState } from "~/utils/ui";
import { trpc } from "~/utils/trpc";
import About from "components/profiles/modes/About/about";

const UserAbout = ({}) => {
  const router = useRouter();
  const username = router.query.username as string;
  const getUserDetails = trpc.user.getUserInfo.useQuery({ username });
  setProgressBarState(40);
  if (getUserDetails.isLoading) {
    return <div></div>;
  }
  setProgressBarState(100);
  if (!getUserDetails.data) {
    router.replace("404");
    return <div></div>;
  }
  return (
    <ProfileLayout username={username}>
      <About
        details={getUserDetails.data.business ?? getUserDetails.data.investor ?? null}
      />
    </ProfileLayout>
  );
};

export default UserAbout;
