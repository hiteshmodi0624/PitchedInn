export interface Media {
    mediaUrl: string;
    mediaType: string;
  }
  
  export interface Comment {
    id: string;
    userId: string;
    content: string;
    date: string;
  }
  
  export interface Interactions {
    likes: number;
    comments: Comment[];
    collected: number;
    saved: number;
    shared: number;
  }
  
  export interface Post {
    id: string;
    media: Media[];
    caption: string;
    date: string;
    interactions: Interactions;
    userId: string;
  }
  