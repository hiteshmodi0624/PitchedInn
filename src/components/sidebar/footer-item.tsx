import { FC } from "react"
import { Link } from "react-router-dom"

const FooterItem:FC<{title:string,link?:string}>=({title,link})=>{
    return (
        <div className="my-0.5 group">
            {link?<Link to={link} className="hover:underline">{title}</Link>:<p>{title}</p>}
            <span className="mx-2 group-last:hidden">·</span>
        </div>
    );
}
export default FooterItem