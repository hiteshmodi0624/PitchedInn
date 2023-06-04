import { PropsWithChildren } from "react";

const Main=({children}:PropsWithChildren)=>{
    return <main
    className="relative grid h-screen justify-center gap-6
text-white sm:grid-cols-[1fr] md:grid-cols-[600px] lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_384px]"
>
        {children}
    </main>;
}
export default Main