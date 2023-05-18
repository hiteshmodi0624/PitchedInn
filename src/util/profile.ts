import { MouseEvent } from "react";
import { dummyPosts } from "../../data/dummy-post";
import { businessProfiles, collectorProfiles, investorProfiles, profiles } from "data/dummy-profiles";

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

export const getProfilePosts = (username: string, type: string) => {
    const profile=profiles.filter((profile)=>profile.username===username)[0]!;
    const userId=profile.id;
    var postIds:string[];
    if(profile.userType==="business")
        postIds=businessProfiles.filter((profile)=>profile.userId===userId)[0]!.posts as string[];
    else if(profile.userType==="collector")
        postIds=collectorProfiles.filter((profile)=>profile.userId===userId)[0]!.collectedPosts as string[];
    else 
        return;
    const posts=dummyPosts.filter((post)=>postIds.find((id)=>id===post.id));
    if (type === "pitches")
        return posts.filter((post) => post.media[0]!.mediaType !== "image");
    return posts
};

export const getProfilePostsFromPostIds = (postIds:string[],type:string) => {
    const posts=dummyPosts.filter((post)=>postIds.find((id)=>id===post.id));
    if (type === "pitches")
        return posts.filter((post) => post.media[0]!.mediaType !== "image");
    return posts
};

export const getDetails = (username: string)=>{
    const profile=profiles.filter((profile)=>profile.username===username)[0]!;
    if(profile.userType==="business")
        return businessProfiles.filter((profile)=>profile.userId===profile.userId)[0];
    else if(profile.userType==="investor")
        return investorProfiles.filter((profile)=>profile.userId===profile.userId)[0];
}

export const getDetailsFromUserid = (userId: string,type:string)=>{
    if(type==="business")
        return businessProfiles.filter((profile)=>profile.userId===userId)[0];
    if(type==="collector")
        return collectorProfiles.filter((profile)=>profile.userId===userId)[0];
    if(type==="investor")
        return investorProfiles.filter((profile)=>profile.userId===userId)[0];
}

export const getProfileData = (userId: string) => {
    const profile=profiles.filter((profile)=>profile.id===userId)!;
    return profile[0];
};
