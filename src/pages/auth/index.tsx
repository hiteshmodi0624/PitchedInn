"use client"
import Feed from "components/feed/feed";
import AuthBottom from "../../../components/auth/root/auth-bottom";

export default function AuthPage() {
    return (
        <>
            <Feed page="Explore"/>
            <AuthBottom />
        </>
    );
}
