import ProfileLayout from "components/layouts/profile-layout";
import About from "components/profiles/modes/About/about";
import { useRouter } from "next/router";
import { getDetails } from "src/util/profile";


const UserAbout = () => {
    const router=useRouter();
    const username=router.query.username as string
    const businessProfile=getDetails(username)
    if(!businessProfile)
        return router.replace(`{/${username}}`)
    return (
      <ProfileLayout username={username}>
        <About details={businessProfile} />
      </ProfileLayout>
    );
};

export default UserAbout;
