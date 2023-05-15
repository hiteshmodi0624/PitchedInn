import Image from "next/image";
import { FC } from "react";

const LargeImage:FC<{className?:string,alt:string,src:string}>=({className,alt,src})=>{
    return (
        <span className={`relative ${className}`}>
            <Image
                width={1000}
                height={1000}
                alt={alt}
                src={`/${src}`}
                style={{objectFit:"scale-down"}}
            />
        </span>
    );
}
export default LargeImage;