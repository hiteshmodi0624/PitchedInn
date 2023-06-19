import ProfileSettings from "components/settings/profile/profile-settings"
import { useRouter } from "next/router";

const SettingsProfile=({})=>{
  const router=useRouter();
  
  return (
    <>
      <ProfileSettings hide={() => router.push("/")} />
    </>
  );
}
export default SettingsProfile