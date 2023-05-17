"use client"
import About from "../../../components/profiles/modes/About/about";
import { getDetails } from "@/util/profile";
import { useRouter } from "next/navigation";

const UserAbout = ({ params }: { params:  {username:string} }) => {
    const router=useRouter();
    const businessProfile=getDetails(params.username)
    if(!businessProfile)
        return router.replace(`{/${params.username}}`)
    return <About details={businessProfile} />;
};

export default UserAbout;
