import { FC } from "react";
import Image from "@/components/ui/image";

const ProfileCover: FC<{
    name: string;
    image: string
}> = ({ name,image }) => {
    return <Image src={image} alt={name} className="h-48" />;
};

export default ProfileCover;
