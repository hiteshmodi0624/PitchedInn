import NavButton from "components/root/navbar/nav-button";
import Navbar from "components/root/navbar/navbar";
import { AiOutlineSearch } from "react-icons/ai";
import { HiLogin } from "react-icons/hi";
import { MdLogin } from "react-icons/md";

export default function AuthNavBar() {
    return (
            <Navbar>
                <ul className="flex sm:flex-col justify-around w-full sm:justify-normal flex-row h-full">
                    <NavButton
                        name="Explore"
                        icon={<AiOutlineSearch />}
                        link="/auth"
                    />
                    <NavButton
                        name="Log in"
                        icon={<MdLogin />}
                        link="/auth/login"
                    />
                    <NavButton
                        name="Sign up"
                        icon={<HiLogin />}
                        link="/auth/signup"
                    />
                </ul>
            </Navbar>
    );
}
