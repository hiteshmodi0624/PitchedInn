import { FC, PropsWithChildren } from "react";
import ProfileData from "./profile-data/profile-data";
import Modes from "../ui/mode/modes";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileRoot: FC<PropsWithChildren<{}>> = ({ children }) => {
    const location = useLocation().pathname.split("/");
    const navigate = useNavigate();
    let path = location.slice(-1)[0];
    if (location.length === 2) path = "posts";
    const setProfileMode = (mode: string) => {
        if (mode === "posts") navigate(location[0] + "/" + location[1]);
        else navigate(mode);
    };

    return (
        <div className="h-screen">
            <ProfileData />
            <Modes
                setMode={setProfileMode}
                mode={path}
                modes={["about", "posts", "pitches", "saved"]}
            />
            <section className="pb-4">{children}</section>
        </div>
    );
};

export default ProfileRoot;
