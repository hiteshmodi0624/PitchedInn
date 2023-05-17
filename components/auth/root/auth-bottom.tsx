import AuthButton from "@/components/shared/buttons/auth-button";
export default function AuthBottom() {
    return (
        <div className="w-screen bg-primary2 fixed bottom-0 z-50 flex flex-wrap justify-evenly py-3">
                <div className="my-auto hidden sm:block">
                    <h1 className="text-white">
                        <span className=" text-2xl font-bold">
                            Don&apos;t miss the next greatest Business Pitch
                        </span>
                        <br />
                        PitchedInn users know about every new amazing
                        Businesses.
                    </h1>
                </div>
                <div className="flex w-full sm:w-2/5">
                    <AuthButton
                        name="Log in"
                        link="auth/login"
                        className="w-full"
                        buttonClasses="!bg-transparent hover:bg-transparent text-white border-white border-[1px] "
                    />
                    <AuthButton
                        name="Sign up"
                        link="auth/signup"
                        className="w-full"
                    />
                </div>
            </div>
    );
}
