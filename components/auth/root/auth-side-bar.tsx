"use client"
import Sidebar from "components/root/sidebar/sidebar";
import SubmitButton from "components/shared/buttons/auth-button";
import Heading from "components/ui/heading";
import { signIn } from "next-auth/react";
import Link from "next/link";
import {  AiFillGoogleSquare } from "react-icons/ai";

export default function AuthSideBar() {
    return (
        <Sidebar>
            <div className="my-3 rounded-3xl bg-gray z-10 w-full overflow-hidden py-3">
                <Heading text="New to PitchedInn?" className="px-6" />
                <h3 className="text-xs text-grey px-6">
                    Sign up now to get your own personalized feed!
                </h3>
                <SubmitButton
                    name="Sign Up With Google"
                    icon={<AiFillGoogleSquare />}
                    onClickHandler={()=>signIn('google',{callbackUrl:"/"})}
                />
                <SubmitButton name="Create Account" link="auth/signup" />
                <h3 className="text-xs text-grey px-6">
                    By signing up, you agree to the{" "}
                    <Link href="terms" className="text-primary2">
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="privacy" className="text-primary2">
                        Privacy Policy
                    </Link>
                    , including{" "}
                    <Link href="cookie" className="text-primary2">
                        Cookie Use
                    </Link>
                    .
                </h3>
            </div>
        </Sidebar>
    );
  }
