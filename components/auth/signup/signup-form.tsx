"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SignUpInputs from "./signup-inputs";
export default function SignUpForm() {
    const [formIsValid,formState]=useState(false);
    const setFormValidity=(state:boolean)=>{
        formState(state);
    }
    return (
        <>
            <form className="mt-5 text-white">
                <SignUpInputs setFormValidity={setFormValidity}/>
                <button
                    type="submit"
                    className={`bg-primary text-white font-bold py-2 px-4 rounded-full w-full mt-3 disabled:opacity-40 disabled:cursor-not-allowed`}
                    disabled={!formIsValid}
                >
                    Sign Up
                </button>
            </form>
            <p className="mt-3 mb-5 text-center">
                Have an account already?{" "}
                <Link href="/auth/login" className="text-blue-500">
                    Log In
                </Link>
            </p>
        </>
    );
}
