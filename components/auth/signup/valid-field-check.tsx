import Label from "components/ui/label/label";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const ValidFieldCheck = ({
  isValid,
  fieldName,
}: {
  isValid: boolean;
  fieldName: string;
}) => {
  return (
    <>
      {isValid ? (
        <div className="absolute right-3 -translate-y-1/2 top-1/2 text-2xl text-green-500">
          <Label
            label={`${fieldName} is available`}
            className="max-w-96 right-0 min-w-max"
          >
            <AiFillCheckCircle />
          </Label>
        </div>
      ) : (
        <div className="absolute right-3 -translate-y-1/2 top-1/2 text-2xl text-red-500">
          <Label
            label={`${fieldName} is not available.`}
            className="max-w-96 right-0 min-w-max"
          >
            <AiFillCloseCircle />
          </Label>
        </div>
      )}
    </>
  );
};
export default ValidFieldCheck;
