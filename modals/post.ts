import profile from "./profile";

export interface data {
    postMedia: string;
    mediaType: string;
    content: string;
}

export interface interactions {
    likes: number;
    comments: number;
    collected: number;
    saved: number;
    shared: number;
}

export default interface post {
    profile: profile;
    post: {
        id:string;
        data:data;
        date: string;
        interactions:interactions
    };
}
