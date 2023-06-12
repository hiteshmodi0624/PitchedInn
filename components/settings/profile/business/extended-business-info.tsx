import { ChangeEventHandler } from 'react';
import Input from '../../../ui/inputs/input';
import TextArea from '../../../ui/inputs/textarea';
const ExtendedBusinessInfoForm = ({
  usp,
  problemStatement,
  solution,
  targetMarket,
  competitiveLandscape,
  businessModel,
  goMarketStrategy,
  teamInfo,
  financialInfo,
  handleInputChange,
}: {
  usp: string;
  problemStatement: string;
  solution: string;
  targetMarket: string;
  competitiveLandscape: string;
  businessModel: string;
  goMarketStrategy: string;
  teamInfo: string;
  financialInfo: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div>
      <TextArea
        id="usp"
        label="Unique Selling Proposition (USP)"
        value={usp}
        placeholder="Unique Selling Proposition (USP)"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <TextArea
        id="problemStatement"
        label="Problem Statement"
        value={problemStatement}
        placeholder="Problem Statement"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <TextArea
        id="solution"
        label="Solution"
        value={solution}
        placeholder="Solution"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <TextArea
        id="targetMarket"
        label="Target Market"
        value={targetMarket}
        placeholder="Target Market"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <TextArea
        id="competitiveLandscape"
        label="Competitive Landscape"
        value={competitiveLandscape}
        placeholder="Competitive Landscape"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <TextArea
        id="businessModel"
        label="Business Model"
        value={businessModel}
        placeholder="Business Model"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <TextArea
        id="goMarketStrategy"
        label="Go-to-Market Strategy"
        value={goMarketStrategy}
        placeholder="Go-to-Market Strategy"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <TextArea
        id="teamInfo"
        label="Team Info"
        value={teamInfo}
        placeholder="Team Info"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <TextArea
        id="financialInfo"
        label="Financial Info"
        value={financialInfo}
        placeholder="Financial Info"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
    </div>
  );
};
export default ExtendedBusinessInfoForm