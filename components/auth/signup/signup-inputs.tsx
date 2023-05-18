"use client";

import { useEffect, useReducer } from "react";
import Input from "../input";
import {
    signupEmailReducer,
    signupNameReducer,
    signupPasswordReducer,
    signupUsernameReducer,
} from "./signup-reducers";
import DOB from "./dob";
import Label from "components/ui/label/label";
const initialValue = {
    value: "",
    isValid: false,
    isTouched: false,
};
export default function SignUpInputs({
    setFormValidity,
}: {
    setFormValidity: (state: boolean) => void;
}) {
    const [
        { isValid: emailIsValid, isTouched: emailIsTouched, value: email },
        dispatchEmail,
    ] = useReducer(signupEmailReducer, initialValue);
    const [
        { isValid: pwdIsValid, isTouched: pwdIsTouched, value: password },
        dispatchPassword,
    ] = useReducer(signupPasswordReducer, initialValue);
    const [
        { isValid: unameIsValid, isTouched: unameIsTouched, value: username },
        dispatchUsername,
    ] = useReducer(signupUsernameReducer, initialValue);
    const [
        { isValid: nameIsValid, isTouched: nameIsTouched, value: name },
        dispatchName,
    ] = useReducer(signupNameReducer, initialValue);
    useEffect(()=>{
        if(emailIsValid&&pwdIsValid&&nameIsTouched&&unameIsTouched){
            setFormValidity(true)
        } else {
            setFormValidity(false)
        }
    },[emailIsValid,pwdIsValid,nameIsTouched,unameIsTouched,setFormValidity])
    return (
        <>
            <Label label="Enter Full Name">
                <Input
                    placeholder="Full Name"
                    type="text"
                    isValid={nameIsValid || !nameIsTouched}
                    value={name}
                    className="bg-transparent !my-1"
                    dispatchInput={dispatchName}
                />
            </Label>
            <Label label="Enter a valid email address">
                <Input
                    placeholder="Email"
                    type="email"
                    isValid={emailIsValid || !emailIsTouched}
                    value={email}
                    className="bg-transparent !my-1"
                    dispatchInput={dispatchEmail}
                />
            </Label>
            <Label label="Enter unique username">
                <Input
                    placeholder="Username"
                    type="text"
                    isValid={unameIsValid || !unameIsTouched}
                    value={username}
                    className="bg-transparent !my-1"
                    dispatchInput={dispatchUsername}
                />
            </Label>
            <Label
                label={`Enter password of at least 8 characters with at least one number, one uppercase and lowercase character, and one special character.
                Special characters like: ! @ # $ % ^ & * ( ) - _ + = ; : , < > ? /`}
            >
                <Input
                    placeholder="Password"
                    type="password"
                    isValid={pwdIsValid || !pwdIsTouched}
                    value={password}
                    className="bg-transparent !my-1"
                    dispatchInput={dispatchPassword}
                />
            </Label>
            <DOB />
        </>
    );
}
