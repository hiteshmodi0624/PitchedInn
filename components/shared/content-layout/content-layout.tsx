import Card from "components/ui/card";
import Heading from "components/ui/heading";
import { LegacyRef, PropsWithChildren } from "react";

function ContentLayout({
    page,
    children,
    headerContent,
    className,
    ref,
    cardClassName,
    headingClass
}: PropsWithChildren<{
    page?: string;
    headerContent?: JSX.Element;
    className?: string;
    cardClassName?: string;
    ref?:LegacyRef<HTMLDivElement>|null
    headingClass?:string
}>) {
    return (
      <div className={`flex w-full flex-col ${className}`} ref={ref}>
        <Card className={`sticky top-0 z-50 h-max w-full bg-black ${cardClassName}`}>
          {page && <Heading text={page} className={`first-letter:uppercase ${headingClass}`} />}
          {headerContent}
        </Card>
        {children}
      </div>
    );
}
  
export default ContentLayout;
