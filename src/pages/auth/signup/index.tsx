import SignUpForm from "components/auth/signup/signup-form";
import AuthLayout from "components/layouts/auth/layout";
import SubmitButton from "components/shared/buttons/auth-button";
import Heading from "components/ui/heading";
import Seperator from "components/ui/seperator/seperator";
import { AiFillGoogleSquare } from "react-icons/ai";

export default function AuthPage() {
    return (
      <AuthLayout>
        <div className="p-4 px-24 text-white">
          <Heading
            text="Create your Account"
            className="!text-4xl font-normal"
          />
          <SubmitButton
            name="Sign Up With Google"
            icon={<AiFillGoogleSquare />}
            link="auth/google"
          />
          <Seperator title="or" />
          <SignUpForm />
        </div>
      </AuthLayout>
    );
}
