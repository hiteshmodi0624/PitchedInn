import { BiArrowBack } from "react-icons/bi";
import Button from "./button";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate=useNavigate()
    const goBack=()=>{
        navigate(-1);
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
