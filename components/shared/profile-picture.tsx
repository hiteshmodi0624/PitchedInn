import { FC } from "react";
import SmallImage from "../ui/small-image";

const ProfilePicture:FC<{profilePic:string,className?:string}> = ({profilePic,className}) => {
    return (
        <SmallImage
            src={profilePic}
            alt={profilePic}
            className={`rounded-full bg-white p-1.5 aspect-square ${className}`}
        />
    );
};
export default ProfilePicture