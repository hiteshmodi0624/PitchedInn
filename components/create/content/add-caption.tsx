import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import ImagesCaraousal from '../../shared/image-carousal/images-carousal';
import { useSession } from 'next-auth/react';
import { trpc } from '~/utils/trpc';
import ProfileImage from "components/profiles/profile-data/profile-image";
import TextArea from '../../ui/inputs/textarea';

const AddCaption = ({
  caption,
  setCaption,
  files,
}: {
  caption: string;
  setCaption: Dispatch<SetStateAction<string>>;
  className?: string;
  files: File[];
}) => {
  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(event.target.value);
  };
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const { data: session } = useSession();
  const getUser=trpc.user.getUserInfo.useQuery({id:session?.user?.id!});
  if(!getUser.data) return (<></>)
  return (
    <>
      <div className="relative flex h-[20rem] w-full items-center bg-gray2">
        <ImagesCaraousal
          files={files}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          imageClassName="max-h-[20rem] object-contain"
        />
      </div>
      <div className="m-6 h-full text-white">
        <div className="flex items-center space-x-4">
          <ProfileImage
            profileImage={getUser.data.image}
            id={getUser.data.id}
            className="h-8 w-8 rounded-full"
          />
          <h2>{getUser.data.username}</h2>
        </div>
        <TextArea
          placeholder="Write a caption..."
          value={caption}
          onChangeHandler={onChangeHandler}
          className="bg-transparent py-0 h-44"
        />
      </div>
    </>
  );
};
export default AddCaption;
