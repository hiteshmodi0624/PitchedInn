"use client"
import Feed from "@/components/feed/feed";
import AuthBottom from "../../components/auth/root/auth-bottom";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
    return (
        <>
            <Feed page="Explore"/>
            <AuthBottom />
        </>
    );
}
