import { profiles } from "@/data/dummy-profiles";
import { profile } from "console";

export const getFollowList=(listType:string,limit?:number)=>{
    if(limit)
        return profiles.filter((profile)=>profile.userType===listType).slice(0,limit)
     else   
        return profiles.filter((profile)=>profile.userType===listType)
}

export const getSearchList=(search:string,limit?:number)=>{
    const posts=profiles;
    if(limit)
        return posts.slice(0,limit)
     else   
        return posts
}