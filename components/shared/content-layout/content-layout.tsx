import Card from "components/ui/card";
import Heading from "components/ui/heading";
import { PropsWithChildren } from "react";

function ContentLayout({
    page,
    children,
    headerContent,
    className,
}: PropsWithChildren<{
    page?: string;
    headerContent?: JSX.Element;
    className?: string;
}>) {
    return (
        <div className={`flex w-full flex-col ${className}`}>
            <Card className="w-full sticky top-0 bg-black z-50 h-max">
                {page&&<Heading text={page} className="first-letter:uppercase" />}
                {headerContent}
            </Card>
            {children}
        </div>
    );
}
  
export default ContentLayout;
