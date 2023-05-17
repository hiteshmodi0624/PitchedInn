"use client";
import { useRouter, usePathname, notFound } from "next/navigation";
import React from "react";
import { getProfileData } from "@/util/profile";
import Modes from "@/components/shared/mode/modes";
import ProfileData from "../../components/profiles/profile-data/profile-data";

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
        return notFound();
    }

    const modes: string[] = [];

    if (profile.userType === "business" || profile.userType === "investor")
        modes.push("about");
    if (profile.userType === "business" || profile.userType === "collector") {
        modes.push("posts", "pitches");
    }
    const setProfileMode = (mode: string) => {
        const newPath =
            mode === "posts" ? `/${username}` : `/${username}/${mode}`;
        return router.push(newPath);
    };

    var currentMode =
        location.length > 1
            ? location.slice(-1)[0]
            : modes.includes("posts")
            ? "posts"
            : modes.length
            ? modes[0]
            : "";
    const useLayout =
        "following" !== currentMode && "followers" !== currentMode;
    return (
        <div className="h-screen">
            {useLayout && (
                <>
                    <ProfileData profile={profile} />
                    {modes.length !== 0 && (
                        <Modes
                            setMode={setProfileMode}
                            mode={currentMode}
                            modes={modes}
                        />
                    )}
                </>
            )}
            <section className="pb-1">{children}</section>
        </div>
    );
};

export default ProfileLayout;
