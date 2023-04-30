import { FC } from "react";
import Image from "./image";

const ProfilePicture:FC<{profilePic:string,className?:string}> = ({profilePic,className}) => {
    return (
        <Image
            src={profilePic}
            alt={profilePic}
            className={className}
        />
    );
};
export default ProfilePicture