"use client";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { getProfileData } from "@/util/profile";
import Modes from "@/components/shared/mode/modes";
import ProfileData from "../../../components/profiles/profile-data/profile-data";

const ProfileLayout = ({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { username: string };
    
}) => {
    const router = useRouter();
    const { username } = params;
    const pathname = usePathname() as string;
    const location = pathname.split("/").filter(Boolean);

    const profile = getProfileData(username);
    if (!profile) {
        return router.replace("/404");
    }
    const modes:string[]=[];

    if(profile.userType==="business"||profile.userType==="investor")
        modes.push("about");
    if(profile.userType==="business"||profile.userType==="collector"){
        modes.push("posts","pitches")
    }

    const currentMode = location.length > 1 ? location.slice(-1)[0] : "posts";
    
    if(currentMode==="posts"&&profile.userType==="investor"){
        return router.replace(`/${username}/about`)
    }

    const setProfileMode = (mode: string) => {
        const newPath =
            mode === "posts" ? `/${username}` : `/${username}/${mode}`;
        router.push(newPath);
    };
    return (
        <div className="h-screen">
            <ProfileData profile={profile}/>
            {modes.length!==0&&<Modes
                setMode={setProfileMode}
                mode={currentMode}
                modes={modes}
            />}
            {modes.length!==0&&<section className="pb-8">{children}</section>}
        </div>
    );
};

export default ProfileLayout;
