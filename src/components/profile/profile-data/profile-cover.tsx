import { FC } from "react";
import Image from "../../ui/image";

const ProfileCover: FC<{
    name: string;
    image: string
}> = ({ name,image }) => {
    return <Image src={image} alt={name} className="w-full " />;
};

export default ProfileCover;
