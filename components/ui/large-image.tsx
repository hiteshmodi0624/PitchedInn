import Image from "next/image";

const LargeImage=({className,alt,src}:{className?:string,alt:string,src:string})=>{
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