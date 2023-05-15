import LargeImage from "@/components/ui/large-image";
import { FC } from "react";

const ProfileCover: FC<{
    name: string;
    image: string
}> = ({ name,image }) => {
    return <LargeImage src={image} alt={name} className="w-full min-h-max" />;
};

export default ProfileCover;
