import ProfileSettings from "components/settings/profile/profile-settings"
import { useRouter } from "next/router";
import Home from "~/pages";

const SettingsProfile=({})=>{
  const router=useRouter();
  
  return (
    <>
      <ProfileSettings hide={() => router.push("/")} />
      <Home/>
    </>
  );
}
export default SettingsProfile