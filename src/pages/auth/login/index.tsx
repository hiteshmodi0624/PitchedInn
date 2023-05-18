import SignInForm from "components/auth/login/login-form";
import AuthLayout from "components/layouts/auth/layout";
import SubmitButton from "components/shared/buttons/auth-button";
import Heading from "components/ui/heading";
import Seperator from "components/ui/seperator/seperator";
import SmallImage from "components/ui/small-image";
import { brand } from "data/data";
import { signIn, useSession } from "next-auth/react";
import { AiFillGoogleSquare } from "react-icons/ai";

export default function AuthPage() {
    const { data: session } = useSession();
    return (
      <AuthLayout>
        <div className="p-4 px-24 text-white">
          <div className="flex justify-center">
            <SmallImage src="favicon-white.ico" alt={brand} className="w-8" />
          </div>
          <Heading
            text="Sign in to PitchedInn"
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
