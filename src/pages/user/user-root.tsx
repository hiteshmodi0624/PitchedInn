import ProfileRoot from "../../components/profile/profile-root";
import { Outlet } from "react-router-dom";
function UserRoot() {
    return (
      <ProfileRoot>
        <Outlet/>
      </ProfileRoot>
    );
  }
  
export default UserRoot;
