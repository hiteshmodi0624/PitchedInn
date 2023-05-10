import { BusinessProfile } from "./business-profile";

export default interface profile{
    name: string;
    username: string;
    backgroundImage:string;
    profilePic: string;
    bio?:string;
    details:{
        type?: string;
        location?:string;
        website?:string;
        foundedDate?:string;
    }
    BusinessProfile?:BusinessProfile
}