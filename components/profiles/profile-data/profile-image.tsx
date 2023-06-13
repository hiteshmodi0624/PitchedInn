import Image from "next/image";

export default function ProfileImage({
  profileImage,
  id,
  className,
}: {
  profileImage: string|undefined|null;
  id: string;
  className?: string;
}) {
  return (
    <Image
      className={`flex aspect-square w-32 justify-center
       overflow-hidden rounded-full border-none bg-white ${className}`}
      width={1000}
      height={1000}
      src={
        profileImage !== undefined &&
        profileImage !== "" &&
        profileImage !== null
          ? profileImage
          : "/profile-picture.svg"
      }
      alt={id ?? "Profile Picture"}
    />
  );
}
