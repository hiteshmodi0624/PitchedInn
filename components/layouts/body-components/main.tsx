import { PropsWithChildren } from "react";

const Main=({children}:PropsWithChildren)=>{
    return <main
    className="relative w-full grid sm:h-dvh justify-center gap-6
text-white grid-cols-[1fr] sm:grid-cols-[1fr] md:grid-cols-[600px] lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_384px]"
>
        {children}
    </main>;
}
export default Main