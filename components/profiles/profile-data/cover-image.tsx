import Image from "next/image";

export default function CoverImage({
  coverImage,
  id,
  className,
}: {
  coverImage: string | null | undefined;
  id: string;
  className?: string;
}) {
  return (
    <div className={`aspect-[3/1] w-full bg-gray ${className}`}>
      {coverImage && (
        <Image
          width={1500}
          height={500}
          src={coverImage}
          alt={id}
          style={{ objectFit: "scale-down" }}
        />
      )}
    </div>
  );
}
