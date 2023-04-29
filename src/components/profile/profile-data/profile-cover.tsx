import { FC } from "react";

const ProfileCover: FC<{
    name: string;
    image: string
}> = ({ name,image }) => {
    return <img src={image} alt={name} className="w-full " />;
};

export default ProfileCover;
