import Button from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <h1 className="text-lg font-bold">
                Sorry, this page isn`&apos;`t available.
            </h1>
            <h2 className="mt-2">
                The link you followed may be broken, or the page may have been
                removed.
            </h2>
            <Button
                name="Go Back To Home Page"
                link="/"
                buttonClasses="bg-primary2 hover:bg-primary2 hover:opacity-90"
                labelClasses="hidden"
                className="mt-4"
            />
        </div>
    );
  }
