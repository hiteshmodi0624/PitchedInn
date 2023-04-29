import { FC } from "react"
import { Link } from "react-router-dom"

const HorizontalListItem:FC<{title:string,link?:string}>=({title,link})=>{
    return (
        <div className="my-0.5 group">
            {link?<Link to={link} className="hover:underline">{title}</Link>:<span>{title}</span>}
            <span className="mx-2 group-last:hidden">·</span>
        </div>
    );
}
export default HorizontalListItem