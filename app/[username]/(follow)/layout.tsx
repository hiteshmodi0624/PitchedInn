"use client";
import ContentLayout from "@/components/shared/content-layout/content-layout";
import Modes from "@/components/shared/mode/modes";
import SmallProfileHeader from "@/components/shared/profile-header/small-profile-header";
import { getProfileData } from "@/util/profile";
import { usePathname,useRouter } from "next/navigation";

const FollowLayout = ({
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

    const setProfileMode = (mode: string) => {
        const newPath = `/${username}/${mode}`
        router.push(newPath);
    }
    const currentMode = location.slice(-1)[0];
    const profile=getProfileData(username)
    return (
        <ContentLayout
            headerContent={<SmallProfileHeader profile={profile} />}
            className="h-screen"
        >
            <div className="h-screen my-6 border-[1px] border-seperator">
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
