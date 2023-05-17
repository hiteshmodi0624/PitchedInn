import { profiles } from "@/data/dummy-profiles";

export const getFollowList=(listType:"collector"|"business",limit?:number)=>{
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