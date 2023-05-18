import { BiArrowBack } from "react-icons/bi";
import Button from "../../ui/button";
import { useRouter } from "next/navigation";

const BackButton = () => {
    const router=useRouter()
    const goBack=()=>{
        router.back()
    }
    return (
        <Button
            name="Back"
            icon={<BiArrowBack />}
            iconClasses="text-lg"
            nameClasses="xl:hidden"
            labelClasses="text-xs"
            onClickHandler={goBack}
        ></Button>
    );
};
export default BackButton;
