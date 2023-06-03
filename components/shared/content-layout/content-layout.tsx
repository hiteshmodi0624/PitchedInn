import Card from "components/ui/card";
import Heading from "components/ui/heading";
import { LegacyRef, PropsWithChildren } from "react";

function ContentLayout({
    page,
    children,
    headerContent,
    className,
    ref,
}: PropsWithChildren<{
    page?: string;
    headerContent?: JSX.Element;
    className?: string;
    ref?:LegacyRef<HTMLDivElement>|null
}>) {
    return (
        <div className={`flex w-full flex-col ${className}`} ref={ref}>
            <Card className="w-full sticky top-0 bg-black z-50 h-max">
                {page&&<Heading text={page} className="first-letter:uppercase" />}
                {headerContent}
            </Card>
            {children}
        </div>
    );
}
  
export default ContentLayout;
