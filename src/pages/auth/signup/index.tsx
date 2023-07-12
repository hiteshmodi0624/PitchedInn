import SignUpForm from "components/auth/signup/signup-form";
import SubmitButton from "components/shared/buttons/auth-button";
import BackButton from "components/shared/buttons/back-button";
import ContentLayout from "components/shared/content-layout/content-layout";
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
    <ContentLayout
      headerContent={
        <div className="flex items-center">
          <BackButton />
          <Heading
            text="Create your Account"
            className="text-center font-normal"
          />
        </div>
      }
    >
      <div className="my-auto max-w-lg mx-auto w-full px-8 py-4 text-white border-seperator border-[1px] ">
        <SubmitButton
          name="Sign Up With Google"
          icon={<AiFillGoogleSquare />}
          onClickHandler={() => signIn("google", { callbackUrl: "/" })}
        />
        <Seperator title="or" />
        <SignUpForm />
      </div>
    </ContentLayout>
  );
}
