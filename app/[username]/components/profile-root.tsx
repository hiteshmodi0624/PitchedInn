"use client"
import { FC, PropsWithChildren } from "react";
import ProfileData from "./profile-data/profile-data";
import Modes from "@/components/shared/mode/modes";
import {  useRouter, usePathname } from "next/navigation";
const ProfileRoot: FC<PropsWithChildren<{params:{username:string}}>> = ({ children,params }) => {
    const router = useRouter();
    const pathname= usePathname();
    const location = pathname!.split("/");
    const username=params.username;
    let path = location.slice(-1)[0];
    if (location.length === 2) path = "posts";
    console.log(location)
    const setProfileMode = (mode: string) => {
        if (mode === "posts") router.push("/"+username);
        else router.push("/"+username+"/"+mode);
    };

    return (
        <div className="h-screen">
            <ProfileData />
            <Modes
                setMode={setProfileMode}
                mode={path}
                modes={["about", "posts", "pitches", "saved"]}
            />
            <section className="pb-8">{children}</section>
        </div>
    );
};

export default ProfileRoot;
