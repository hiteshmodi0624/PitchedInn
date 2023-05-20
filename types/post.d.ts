import { Collects, Comment, Likes, Media, Post, Saves } from "@prisma/client";

type Interactions = {
    likes: Likes[];
    comments: Comment[];
    collects: Collects[];
    saves: Saves[];
    shares: number;
};

interface completePost extends Post{
    comments:Comment[],
    media:Media[]
    likes: Likes[];
    comments: Comment[];
    collects: Collects[];
    saves: Saves[];
}
