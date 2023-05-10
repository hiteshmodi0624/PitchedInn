import { dummyPosts } from "../data/dummy-post"

export const getFollowList=(listType:string,limit?:number)=>{
    const posts=dummyPosts;
    if(limit)
        return posts.slice(0,limit).map(posts=>posts.profile)
     else   
        return posts.map(posts=>posts.profile)
}

export const getSearchList=(search:string,limit?:number)=>{
    const posts=dummyPosts;
    if(limit)
        return posts.slice(0,limit).map(posts=>posts.profile)
     else   
        return posts.map(posts=>posts.profile)
}