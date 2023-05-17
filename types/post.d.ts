interface Media {
    mediaUrl: string;
    mediaType: string;
}

interface Comments {
    id: string;
    userId: string;
    content: string;
    date: string;
}

type Interactions = {
    likes: number;
    comments: Comments[];
    collected: number;
    saved: number;
    shared: number;
};

interface Post {
    id: string;
    media: Media[];
    caption: string;
    date: string;
    interactions: Interactions;
    userId: string;
}
