"use client";
import { useReducer } from "react";
import Input from "../input";
import { loginUsernameReducer, loginPasswordReducer } from "./login-reducers";
import SubmitButton from "../../shared/buttons/submit-button";
import Link from "next/link";
export default function SignInForm() {
    const initialValue = {
        value: "",
        isValid: false,
        isTouched: false,
    };
    const [{ isValid: usernameIsValid, value: username }, dispatchUsername] =
        useReducer(loginUsernameReducer, initialValue);
    const [{ isValid: passwordIsValid, value: password }, dispatchPassword] =
        useReducer(loginPasswordReducer, initialValue);
    return (
        <>
            <form className="mt-5 text-black">
                <Input
                    placeholder="Email or username"
                    type="username"
                    isValid={true}
                    value={username}
                    className="bg-transparent"
                    dispatchInput={dispatchUsername}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    isValid={true}
                    value={password}
                    className="bg-transparent"
                    dispatchInput={dispatchPassword}
                />
                <SubmitButton
                    name="Sign in"
                    disabled={!(usernameIsValid && passwordIsValid)}
                />
                <SubmitButton
                    name="Forgot password?"
                    disabled={false}
                    className="bg-transparent border-white border-[1px]"
                />
            </form>
            <p className="mt-3  text-center">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" className="text-blue-500">
                    Sign Up
                </Link>
            </p>
        </>
    );
}
