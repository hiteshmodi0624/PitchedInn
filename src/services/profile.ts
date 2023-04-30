import { MouseEvent } from "react";
import { dummyPosts } from "../data/dummy-post";

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
    const posts = dummyPosts;
    if (type === "saved") return posts;
    else if (type === "pitches")
        return posts.filter((post) => post.post.data.mediaType === "video");
    else return posts;
};

export const getProfileData = (username: string) => {
    const posts = dummyPosts;
    return posts[0].profile;
};
