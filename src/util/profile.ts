import { MouseEvent } from "react";
import {
  businessProfiles,
  collectorProfiles,
  investorProfiles,
  profiles,
} from "data/dummy-profiles";

export const blockHandler = (username: string) => {};

export const followHandler = (
  username: string,
  changeState: React.Dispatch<React.SetStateAction<boolean>>,
  event: MouseEvent<HTMLButtonElement>
) => {
  event.preventDefault();
  changeState((prev) => !prev);
};

export const reportHandler = (username: string) => {};

export const muteHandler = (username: string) => {};


export const getDetails = (username: string) => {
  const profile = profiles.filter(
    (profile) => profile.username === username
  )[0]!;
  if (profile.userType === "business")
    return businessProfiles.filter(
      (profile) => profile.userId === profile.userId
    )[0];
  else if (profile.userType === "investor")
    return investorProfiles.filter(
      (profile) => profile.userId === profile.userId
    )[0];
};

export const getDetailsFromUserid = (userId: string, type: string) => {
  if (type === "business")
    return businessProfiles.filter((profile) => profile.userId === userId)[0];
  if (type === "collector")
    return collectorProfiles.filter((profile) => profile.userId === userId)[0];
  if (type === "investor")
    return investorProfiles.filter((profile) => profile.userId === userId)[0];
};

export const getProfileData = (userId: string) => {
  const profile = profiles.filter((profile) => profile.id === userId)!;
  return profile[0];
};
