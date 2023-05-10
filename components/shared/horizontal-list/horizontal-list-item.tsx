'use client';
import Link from "next/link";
import { FC } from "react"

const HorizontalListItem:FC<{title:string,link?:string}>=({title,link})=>{
    return (
        <div className="my-0.5 group">
            {link?<Link href={link} className="hover:underline">{title}</Link>:<span>{title}</span>}
            <span className="mx-2 group-last:hidden">·</span>
        </div>
    );
}
export default HorizontalListItem