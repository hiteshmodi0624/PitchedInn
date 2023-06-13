import CoverImage from "components/profiles/profile-data/cover-image";
import ProfileImage from "components/profiles/profile-data/profile-image";
import Input from '../../ui/inputs/input';
import DOB from "components/auth/signup/dob";
import { trpc } from '~/utils/trpc';
import { z } from 'zod';
import ValidFieldCheck from '../../auth/signup/valid-field-check';
import { DOBInputType } from "components/auth/reducers";
import { pageType } from "./settings-form";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import Select from '../../ui/inputs/select';
import TextArea from '../../ui/inputs/textarea';
import { BiImageAdd } from "react-icons/bi";
import UploadImage from '../../shared/upload-image/upload-image';
import { useState } from "react";
import UploadImageLabel from '../../shared/upload-image/upload-image-label';

const DefaultForm = ({
  coverImage,
  profileImage,
  name,
  bio,
  username,
  nameIsTouched,
  usernameIsTouched,
  onChangeHandler,
  dob,
  DOBChangeHandler,
  type,
  profileUsername,
  page,
  setPage,
}:{
  coverImage:string,
  profileImage:string,
  name:string,
  bio:string,
  username:string,
  nameIsTouched:boolean,
  usernameIsTouched:boolean,
  onChangeHandler:React.ChangeEventHandler<HTMLInputElement>,
  dob:DOBInputType,
  DOBChangeHandler:React.ChangeEventHandler<HTMLOptionElement>,
  type:string,
  profileUsername:string,
  page:pageType,
  setPage:React.Dispatch<React.SetStateAction<pageType>>,
})=>{
  const usernameQuery = trpc.user.usernameExists.useQuery({
    username: username,
  });
  const [profilePhoto, setProfilePhoto] = useState<File>();
  const [uploadState,setUploadState] = useState<string>("selection");
  const [dragState,setDragState] = useState<string>("end");
  const setPhoto = (file:File)=>{
    setProfilePhoto(file);
  }
  return (
    <>
      <div className="relative w-full">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2
         -translate-y-1/2 space-x-3"
        >
          {coverImage && (
            <button
              className="rounded-full bg-black bg-opacity-80 p-3 text-2xl 
         text-white transition-all duration-300 hover:bg-grey hover:bg-opacity-50"
            >
              <AiOutlineClose />
            </button>
          )}
          <button
            className="rounded-full bg-black bg-opacity-80 p-3 text-2xl 
         text-white transition-all duration-300 hover:bg-grey hover:bg-opacity-50"
          >
            <BiImageAdd />
          </button>
        </div>
        <CoverImage coverImage={coverImage} id={username} />
      </div>
      <div className="relative mx-5 w-max -translate-y-1/3">
        <UploadImage
          setUploadState={setUploadState}
          setDragState={setDragState}
          setFiles={setPhoto}
        >
          <div
            className="absolute left-1/2 top-1/2 z-[80] flex
         -translate-x-1/2 -translate-y-1/2 space-x-1"
          >
            {profileImage && (
              <button
                className="rounded-full bg-black bg-opacity-80 p-2 text-xl 
         text-white transition-all duration-300 hover:bg-grey hover:bg-opacity-50"
              >
                <AiOutlineClose />
              </button>
            )}

            <UploadImageLabel
              className="w-min rounded-full bg-black bg-opacity-80 p-2 
       text-xl text-white transition-all duration-300 hover:bg-grey hover:bg-opacity-50"
            >
              <BiImageAdd />
            </UploadImageLabel>
          </div>
          <ProfileImage
            profileImage={
              profilePhoto ? URL.createObjectURL(profilePhoto) : profileImage
            }
            className="border-[1px]"
            id={username}
          />
        </UploadImage>
      </div>
      <div className="mx-10">
        <Input
          id="name"
          label="Name"
          value={name}
          type="text"
          placeholder="Name"
          className="my-3 bg-transparent "
          onChangeHandler={onChangeHandler}
          isValid={z.string().min(2).safeParse(name).success || !nameIsTouched}
          error="Name must be at least 2 characters long"
        />
        <TextArea
          id="bio"
          label="Bio"
          value={bio}
          placeholder="Bio"
          className="my-3 bg-transparent"
          onChangeHandler={onChangeHandler}
        />
        <div className="relative">
          <Input
            placeholder="Username"
            type="text"
            className="my-3 bg-transparent"
            value={username}
            onChangeHandler={onChangeHandler}
            id="username"
            label="Username"
            isValid={z.string().min(4).safeParse(username).success}
            error={"Username must be unique and at least 4 characters long."}
          />
          {usernameIsTouched &&
            z.string().min(4).safeParse(username).success && (
              <ValidFieldCheck
                fieldName="Username"
                isValid={
                  usernameQuery.isFetching ||
                  username === profileUsername ||
                  usernameQuery.data === false
                }
              />
            )}
        </div>
        <Select
          placeholder="Type"
          className="w-full bg-transparent"
          value={type}
          onChangeHandler={onChangeHandler}
          id="type"
          label="User Type"
        >
          <option value="Regular">Regular</option>
          <option value="Business">Business</option>
          <option value="Investor">Investor</option>
        </Select>
      </div>
      {type === "Business" && (
        <button
          className="flex w-full justify-between px-10 py-3 text-xl text-white hover:bg-gray"
          onClick={(event) => {
            event.preventDefault();
            setPage("business-details");
          }}
        >
          Edit your Business Profile
          <AiOutlineArrowRight className="text-2xl" />
        </button>
      )}
      {type === "Investor" && (
        <button
          className="flex w-full justify-between px-10 py-3 text-xl text-white hover:bg-gray"
          onClick={(event) => {
            event.preventDefault();
            setPage("business-details");
          }}
        >
          Edit your Investor Profile
          <AiOutlineArrowRight className="text-2xl" />
        </button>
      )}
      <div className="mx-10 mb-5">
        <DOB DOB={dob} handleChange={DOBChangeHandler} />
      </div>
    </>
  );
}
export default DefaultForm;