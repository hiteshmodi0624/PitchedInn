type UserType = "common" | "collector" | "business" | "investor";

type ProfileMap<T extends UserType> = T extends "collector"
    ? CollectorInfo
    : T extends "business"
    ? BusinessInfo
    : T extends "investor"
    ? InvestorInfo
    : {};

interface Profile {
    id: string;
    name: string;
    username: string;
    backgroundImage: string;
    profilePic: string;
    bio?: string;
    userType: UserType;
    savedPosts: string[];
    followers: string[];
    following: string[];
}
