"use client"
import Feed from "@/components/feed/feed";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
    return (
        <Feed page="Home"/>
    );
  }
