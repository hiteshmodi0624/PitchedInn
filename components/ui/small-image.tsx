import Image from "next/image";
import { FC } from "react";

const SmallImage:FC<{className?:string,alt:string,src:string}>=({className,alt,src})=>{
    return (
        <span className={`relative flex justify-center ${className}`}>
            <Image
                width={300}
                height={300}
                alt={alt}
                src={`/${src}`}
                style={{objectFit:"scale-down"}}
            />
        </span>
    );
}
export default SmallImage;