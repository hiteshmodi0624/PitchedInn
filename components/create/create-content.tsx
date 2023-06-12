import { PutObjectCommand } from "@aws-sdk/client-s3";
import AddCaption from "./content/add-caption";
import CreateImage from "./content/create-Image";
import CreateButtons from "./content/create-buttons";
import UploadImage from "./content/upload-image";
import crypto from "crypto";
import { useSession } from "next-auth/react";
import { trpc } from "~/utils/trpc";
import { useRef, useState } from "react";
import { useContainerDimensions } from "components/hooks/useContainerDimensions";
const CreateContent = ({
  createState,
  onCloseHandler,
  setBackdrop,
  setDiscardMode,
  dragState,
  top,
  left,
  setTop,
  setLeft,
  hide,
  DragStateHandler,
  CreateStateHandler,
}: CreateContentType) => {
  const { data: session } = useSession();
  const [ratio,setRatio]= useState(1);
  const createPost = trpc.post.createPost.useMutation();
  const getSecureUrl = trpc.post.getSignedUrl.useQuery();
  const containerRef = useRef<HTMLDivElement>(null);
  const { height: containerDimension } = useContainerDimensions(containerRef);
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState<File>();
  const setFiles = (fl: File) => {
    setFile(fl);
  };

  const onSubmitHandler = async () => {
    if (session?.user && file && getSecureUrl.data) {
      const { url, imageName } = getSecureUrl.data;
      const result = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
          'Origin': 'https://pitched-inn.vercel.app',
        },
        body: file,
      });
      if (result.status===200) {
        createPost.mutate({
          caption,
          mediaType: "Images",
          mediaUrl: [imageName],
        });
        hide();
      }
    }
  };
  const handleSetRatio=(r:number)=>{
    setRatio(r);
    setTop(undefined);
    setLeft(undefined);
  }
  const ratios:number[][]= [[1,1],[4,5],[16,9]]
  return (
    <>
      <CreateButtons
        createState={createState}
        onCloseHandler={onCloseHandler}
        setBackdrop={setBackdrop}
        setCreateState={CreateStateHandler}
        setDiscardMode={setDiscardMode}
        onSubmitHandler={onSubmitHandler}
      />
      <div className={`aspect-square h-full w-full`} ref={containerRef}>
        <UploadImage
          setDragState={DragStateHandler}
          setCreateState={CreateStateHandler}
          setFiles={setFiles}
          className={`${createState === "selection" ? "block" : "hidden"}`}
        />
        {containerDimension && createState === "crop" && (
          <div className="relative flex justify-center">
            <div className="absolute bottom-2 left-2 z-10  space-x-2">
              {ratios.map((r) => {
                const rat = r[0]! / r[1]!;
                return (
                  <button
                    className="h-10 w-10 rounded-full bg-gray text-sm text-white"
                    onClick={handleSetRatio.bind(null, rat)}
                    key={rat}
                  >
                    {r[0]!}:{r[1]!}
                  </button>
                );
              })}
            </div>
            <CreateImage
              src={dragState}
              top={top}
              left={left}
              setLeft={setLeft}
              setTop={setTop}
              containerRatio={ratio}
              containerWidth={ratio>1?containerDimension:containerDimension*ratio}
              containerHeight={ratio>1?containerDimension/ratio:containerDimension}
            />
          </div>
        )}
        {createState === "final" && (
          <AddCaption caption={caption} setCaption={setCaption} />
        )}
      </div>
    </>
  );
};
export default CreateContent;

type topOrLeft = number | undefined;
type CreateContentType = {
  DragStateHandler: (state: string) => void;
  CreateStateHandler: (state: string) => void;
  setTop: (val: topOrLeft) => void;
  setLeft: (val: topOrLeft) => void;
  top: topOrLeft;
  left: topOrLeft;
  createState: string;
  onCloseHandler: () => void;
  setBackdrop: (val: boolean) => void;
  setDiscardMode: (mode: "close" | "back") => void;
  dragState: string;

  hide: () => void;
};
