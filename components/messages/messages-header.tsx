import BackButton from "components/shared/buttons/back-button";
import ProfilePicture from "components/shared/account/profile-picture";
import Link from "next/link";

const MessagesHeader = ({
  name,
  image,
  description,
  typing
}: {
  name: string | null | undefined;
  image: string | null | undefined;
  description: string | null | undefined;
  typing: string | null | undefined;
}) => {
  return (
    <div className="flex border-[1px] border-seperator bg-transparent p-2">
      <BackButton />
      <Link href={`/${name}`} className="flex items-center space-x-2 ">
        <ProfilePicture
          className="h-8 w-8 rounded-full bg-white"
          profilePic={image ?? null}
        />
        <div>
          <h1>{name}</h1>
          {typing && <h2 className="text-xs">{typing} is typing</h2>}
        </div>
      </Link>
    </div>
  );
};

export default MessagesHeader;
