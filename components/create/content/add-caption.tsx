import { ChangeEvent, Dispatch, SetStateAction } from "react";

const AddCaption = ({
  caption,
  setCaption,
  className
}: {
  caption: string;
  setCaption: Dispatch<SetStateAction<string>>;
  className?:string
}) => {
  const onChangeHandler=(event: ChangeEvent<HTMLTextAreaElement>)=>{
    setCaption(event.target.value)
  }
  return (
    <div className={`h-full p-6 ${className}`}>
      <textarea
        className={`h-full w-full bg-transparent text-white`}
        id="caption"
        value={caption}
        onChange={onChangeHandler}
      ></textarea>
    </div>
  );
};
export default AddCaption