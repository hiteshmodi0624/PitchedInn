import Link from "next/link";
import SignUpInputs from "./signup-inputs";
export default function SignUpForm() {
  return (
    <>
      <form className="mt-5 text-white">
        <SignUpInputs />
      </form>
      <p className="mb-5 mt-3 text-center">
        Have an account already?{" "}
        <Link href="/auth/login" className="text-blue-500">
          Log In
        </Link>
      </p>
    </>
  );
}
