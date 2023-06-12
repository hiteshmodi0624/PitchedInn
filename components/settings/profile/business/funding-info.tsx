import { ChangeEventHandler } from 'react';
import TextArea from '../../../ui/inputs/textarea';
const FundingInfoForm = ({
  traction,
  milestones,
  fundingStage,
  amountSought,
  investmentTerms,
  handleInputChange,
}: {
  traction: string;
  milestones: string;
  fundingStage: string;
  amountSought: string;
  investmentTerms: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div>
      <TextArea
        id="traction"
        label="Traction"
        value={traction}
        placeholder="Traction"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <TextArea
        id="milestones"
        label="Milestones"
        value={milestones}
        placeholder="Milestones"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <TextArea
        id="fundingStage"
        label="Funding Stage"
        value={fundingStage}
        placeholder="Funding Stage"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <TextArea
        id="amountSought"
        label="Amount Sought"
        value={amountSought}
        placeholder="Amount Sought"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <TextArea
        id="investmentTerms"
        label="Investment Terms"
        value={investmentTerms}
        placeholder="Investment Terms"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
    </div>
  );
};
export default FundingInfoForm