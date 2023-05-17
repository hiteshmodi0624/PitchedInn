import Image from "next/image";

const SmallImage = ({
    className,
    alt,
    src,
}: {
    className?: string;
    alt: string;
    src: string;
}) => {
    return (
        <span className={`relative flex justify-center ${className}`}>
            <Image
                width={300}
                height={300}
                alt={alt}
                src={`/${src}`}
                style={{ objectFit: "scale-down" }}
            />
        </span>
    );
};
export default SmallImage;