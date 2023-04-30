import { dummyPosts } from "../data/dummy-post";

export const likeHandler = (
    postId: string,
    changeState: React.Dispatch<React.SetStateAction<boolean>>
) => {
    changeState((prev) => !prev);
};
export const saveHandler = (
    postId: string,
    changeState: React.Dispatch<React.SetStateAction<boolean>>
) => {
    changeState((prev) => !prev);
};
export const collectHandler = (
    postId: string,
    changeState: React.Dispatch<React.SetStateAction<boolean>>
) => {
    changeState((prev) => !prev);
};
export const logoutHandler=()=>{
    
}
export const changePasswordHandler=(username:string)=>{
    
}

export const getPosts=()=>{
    const posts=dummyPosts;
    return posts
}