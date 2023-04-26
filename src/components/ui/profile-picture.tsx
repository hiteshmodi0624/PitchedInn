import { FC } from "react";

const ProfilePicture:FC<{profilePic:string,className?:string}> = ({profilePic,className}) => {
    return (
        <img
            src={profilePic}
            alt={profilePic}
            className={className}
        />
    );
};
export default ProfilePicture