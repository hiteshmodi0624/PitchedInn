"use client";
import { FormEvent, useReducer } from "react";
import Input from "../input";

import SubmitButton from "../../shared/buttons/submit-button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { inputReducer } from "../reducers";
import { loginInputSchema } from "~/server/routers/user/schema";
export default function SignInForm() {
  const initialValue = {
    value: "",
    isValid: false,
    isTouched: false,
  };
  const signInHandler = async (event: FormEvent) => {
    event.preventDefault();
    const result = await signIn(
      "login",
      { email: username.value, password: password.value },
      { callbackUrl: "/" }
    );
    console.log(result);
  };
  const [username, dispatchUsername] = useReducer(inputReducer, initialValue);
  const [password, dispatchPassword] = useReducer(inputReducer, initialValue);
  return (
    <>
      <form className="mt-5 text-black">
        <Input
          placeholder="Email or username"
          type="username"
          isValid={username.isValid || !username.isTouched}
          value={username.value}
          className="bg-transparent"
          dispatchInput={dispatchUsername}
          validationChecker={loginInputSchema.emailOrUsername.safeParse}
        />
        <Input
          placeholder="Password"
          type="password"
          isValid={password.isValid || !password.isTouched}
          value={password.value}
          className="bg-transparent"
          dispatchInput={dispatchPassword}
          validationChecker={loginInputSchema.password.safeParse}
        />
        <SubmitButton
          name="Sign in"
          disabled={!(username.isValid && password.isValid)}
          onClickHandler={signInHandler}
        />
        <SubmitButton
          name="Forgot password?"
          disabled={false}
          className="border-[1px] border-white bg-transparent"
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
