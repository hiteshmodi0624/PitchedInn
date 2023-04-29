export default interface profile{
    name: string;
    username: string;
    backgroundImage:string;
    profilePic: string;
    following: boolean;
    bio?:string;
    details:{
        type?: string;
        location?:string;
        website?:string;
        birthDate?:string;
    }
}