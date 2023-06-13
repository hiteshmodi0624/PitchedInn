import AddCaption from "./content/add-caption";
import CreateButtons from "./content/create-buttons";
import UploadImage from "../shared/upload-image/upload-image";
import { useSession } from "next-auth/react";
import { trpc } from "~/utils/trpc";
import { useRef, useState } from "react";
import { IoMdPhotos } from 'react-icons/io';
import PreviewImage from './preview-image';
import { randomBytes } from "crypto";
import UploadImageLabel from '../shared/upload-image/upload-image-label';
const CreateContent = ({
  createState,
  onCloseHandler,
  setBackdrop,
  setDiscardMode,
  hide,
  DragStateHandler,
  CreateStateHandler,
  files,
  setFiles
}: CreateContentType) => {
  const { data: session } = useSession();
  const createPost = trpc.post.createPost.useMutation();
  const getSecureUrl = trpc.post.getSignedUrl.useMutation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [caption, setCaption] = useState("");

  const onSubmitHandler = async () => {
    const imageNames:string[]=[];
    if (session?.user && files) {
      const rawBytes = randomBytes(7);
      await Promise.all(
        files.map(async (file,i) => {
          const imageName = `${session.user.id}/p/${rawBytes.toString("hex")+i}#${new Date().toJSON()}`;
          const url=await getSecureUrl.mutateAsync({imageName});
          if(!url)
            return;
          imageNames.push(imageName);
          return await fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "multipart/form-data",
              Origin: "https://pitched-inn.vercel.app",
            },
            body: file,
          });
        })
      );
      createPost.mutate({
        caption,
        mediaType: "Images",
        mediaUrl: imageNames,
      });
      hide();
    }
  };
  return (
    <div className="flex h-full grow">
      <CreateButtons
        createState={createState}
        onCloseHandler={onCloseHandler}
        setBackdrop={setBackdrop}
        setCreateState={CreateStateHandler}
        setDiscardMode={setDiscardMode}
        onSubmitHandler={onSubmitHandler}
      />
      <div ref={containerRef} className="m-auto">
        <UploadImage
          setDragState={DragStateHandler}
          setUploadState={CreateStateHandler}
          setFiles={setFiles}
          className={`flex aspect-square  flex-col items-center justify-center text-white ${
            createState === "selection" ? "block" : "hidden"
          }`}
        >
          <IoMdPhotos className="text-7xl" />
          <h2 className="py-3 text-xl">Drag photos and videos here</h2>
          <UploadImageLabel className="rounded-full bg-primary2 px-6 py-2 file:bg-black hover:bg-primary2 hover:opacity-90">
            Select from your device
          </UploadImageLabel>
        </UploadImage>
        {createState === "preview" && (
          <PreviewImage
            CreateStateHandler={CreateStateHandler}
            DragStateHandler={DragStateHandler}
            files={files}
            setFiles={setFiles}
          />
        )}
        {createState === "final" && (
          <AddCaption caption={caption} setCaption={setCaption} files={files} />
        )}
      </div>
    </div>
  );
};
export default CreateContent;

type CreateContentType = {
  DragStateHandler: (state: string) => void;
  CreateStateHandler: (state: string) => void;
  createState: string;
  onCloseHandler: () => void;
  setBackdrop: (val: boolean) => void;
  setDiscardMode: (mode: "close" | "back") => void;
  dragState: string;
  hide: () => void;
  files: File[];
  setFiles: (fl: File,remove?:boolean) => void;
};
