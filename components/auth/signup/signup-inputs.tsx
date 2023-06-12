import {
  ChangeEventHandler,
  FormEvent,
  useEffect,
  useReducer,
  useState,
} from "react";
import Input from "../../ui/inputs/input";
import {
  dobInitialValue,
  dobReducer,
  initialValue,
  inputReducer,
} from "../reducers";
import DOB from "./dob";
import Label from "components/ui/label/label";
import { signIn } from "next-auth/react";
import { registerInputSchema } from "~/server/routers/user/schema";
import { trpc } from "~/utils/trpc";
import ValidFieldCheck from "./valid-field-check";
export default function SignUpInputs() {
  const [formIsValid, formState] = useState(false);
  const [email, dispatchEmail] = useReducer(inputReducer, initialValue);
  const [password, dispatchPassword] = useReducer(inputReducer, initialValue);
  const [username, dispatchUsername] = useReducer(inputReducer, initialValue);
  const [name, dispatchName] = useReducer(inputReducer, initialValue);
  const [dob, dispatchDOB] = useReducer(dobReducer, dobInitialValue);

  const DOBChangeHandler: ChangeEventHandler<HTMLOptionElement> = (event) => {
    const { id: type, value } = event.target;
    if (type === "date" || type === "month" || type === "year")
      dispatchDOB({ type, value: +value });
  };
  const usernameQuery = trpc.user.usernameExists.useQuery({
    username: username.value,
  });
  const emailQuery = trpc.user.emailExists.useQuery({ email: email.value });

  useEffect(() => {
    formState(
      email.isValid &&
        password.isValid &&
        name.isValid &&
        username.isValid &&
        usernameQuery.data === false &&
        emailQuery.data === false
    );
  }, [
    email.isValid,
    password.isValid,
    name.isValid,
    username.isValid,
    emailQuery.data,
    usernameQuery.data,
  ]);

  const signupHandler = async (event: FormEvent) => {
    event.preventDefault();
    signIn("register", {
      email: email.value,
      password: password.value,
      username: username.value,
      name: name.value,
      dob: `${dob.month}/${dob.date}/${dob.year}`,
    });
  };
  return (
    <>
      <Label label="Enter Full Name">
        <Input
          placeholder="Full Name"
          type="text"
          isValid={name.isValid || !name.isTouched}
          value={name.value}
          className="bg-transparent"
          dispatchInput={dispatchName}
          id="name"
          validationChecker={registerInputSchema.name.safeParse}
        />
      </Label>

      <div className="relative">
        <Label label="Enter a valid email.">
          <Input
            placeholder="Email"
            type="email"
            isValid={email.isValid || !email.isTouched}
            value={email.value}
            className="bg-transparent pr-10"
            dispatchInput={dispatchEmail}
            id="email"
            validationChecker={registerInputSchema.email.safeParse}
          />
        </Label>
        {email.isTouched && email.isValid && (
          <ValidFieldCheck
            fieldName="Email"
            isValid={emailQuery.data === false}
          />
        )}
      </div>
      <div className="relative">
        <Label label="Enter unique username of atleast 4 characters.">
          <Input
            placeholder="Username"
            type="text"
            isValid={username.isValid || !username.isTouched}
            value={username.value}
            className="bg-transparent pr-10"
            dispatchInput={dispatchUsername}
            id="username"
            validationChecker={registerInputSchema.username.safeParse}
          />
        </Label>
        {username.isTouched && username.isValid && (
          <ValidFieldCheck
            fieldName="Username"
            isValid={usernameQuery.data === false}
          />
        )}
      </div>
      <Label
        label={`Enter password of at least 8 characters with at least one number, one uppercase and lowercase character, and one special character (? = . * [ @ $ ! % * ? & ]).`}
      >
        <Input
          placeholder="Password"
          type="password"
          isValid={password.isValid || !password.isTouched}
          value={password.value}
          className="bg-transparent"
          dispatchInput={dispatchPassword}
          id="password"
          validationChecker={registerInputSchema.password.safeParse}
        />
      </Label>

      <div className="my-3 space-y-1">
        <p className="text-sm">Date of Birth</p>
        <p className="text-xs text-grey">
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business or a collector.
        </p>
        <DOB handleChange={DOBChangeHandler} DOB={dob} />
      </div>

      <button
        onClick={signupHandler}
        className={`mt-3 w-full rounded-full bg-primary px-4 py-2 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40`}
        disabled={!formIsValid}
      >
        Sign Up
      </button>
    </>
  );
}
