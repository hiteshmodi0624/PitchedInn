import { FC } from "react";
import Image from "next/image";

const ProfilePicture:FC<{profilePic:string|null,className?:string}> = ({profilePic,className}) => {
    return (
        <Image
            className={`flex rounded-full aspect-square ${className}`}
            width={1000}
            height={1000}
            src={profilePic ?? "/profile-picture.svg"}
            alt={profilePic ?? "Profile Picture"}
          />
    );
};
export default ProfilePicture