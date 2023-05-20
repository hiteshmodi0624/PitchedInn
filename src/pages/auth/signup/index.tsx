import SignUpForm from "components/auth/signup/signup-form";
import AuthLayout from "components/layouts/auth/layout";
import SubmitButton from "components/shared/buttons/auth-button";
import Heading from "components/ui/heading";
import Seperator from "components/ui/seperator/seperator";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AiFillGoogleSquare } from "react-icons/ai";
import { setProgressBarState } from "~/utils/ui";

export default function AuthPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    setProgressBarState(80);
    return <div></div>;
  } else if (status === "authenticated") {
    console.log(session);
    router.replace("/");
    console.log(session);
  }

  setProgressBarState(100);
  return (
    <AuthLayout>
      <div className="p-4 px-24 text-white">
        <Heading text="Create your Account" className="!text-4xl font-normal" />
        <SubmitButton
          name="Sign Up With Google"
          icon={<AiFillGoogleSquare />}
          onClickHandler={() => signIn("google", { callbackUrl: "/" })}
        />
        <Seperator title="or" />
        <SignUpForm />
      </div>
    </AuthLayout>
  );
}
