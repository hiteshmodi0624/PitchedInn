import SignInForm from "components/auth/login/login-form";
import AuthLayout from "components/layouts/auth/layout";
import SubmitButton from "components/shared/buttons/auth-button";
import Heading from "components/ui/heading";
import Seperator from "components/ui/seperator/seperator";
import SmallImage from "components/ui/small-image";
import { brand } from "data/data";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AiFillGoogleSquare } from "react-icons/ai";
import { setProgressBarState } from "~/utils/ui";

export default function AuthPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    setProgressBarState(80);
    return <div></div>;
  }
  if (status === "authenticated") {
    router.replace("/");
  }
  setProgressBarState(100);
  return (
    <AuthLayout>
      <div className="p-4 sm:px-24 text-white">
        <div className="flex justify-center">
          <SmallImage src="favicon-white.ico" alt={brand} className="w-8" />
        </div>
        <Heading
          text={`Sign in to ${brand}`}
          className="!text-4xl font-normal"
        />
        <SubmitButton
          name="Sign In With Google"
          icon={<AiFillGoogleSquare />}
          onClickHandler={() => signIn("google", { callbackUrl: "/" })}
        />
        <Seperator title="or" />
        <SignInForm />
      </div>
    </AuthLayout>
  );
}
