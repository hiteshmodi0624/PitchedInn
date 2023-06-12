import { ChangeEventHandler } from 'react';
import Input from '../../../ui/inputs/input';
import TextArea from '../../../ui/inputs/textarea';
const BusinessDetailsForm = ({
  businessDescription,
  companyName,
  contactEmail,
  industry,
  location,
  niche,
  website,
  handleInputChange,
}: {
  companyName: string;
  niche: string;
  industry: string;
  businessDescription: string;
  location: string;
  contactEmail: string;
  website: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div>
      <Input
        id="companyName"
        label="Company Name"
        value={companyName}
        type="text"
        placeholder="Company Name"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <Input
        id="niche"
        label="Niche"
        value={niche}
        type="text"
        placeholder="Niche"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <Input
        id="industry"
        label="Industry"
        value={industry}
        type="text"
        placeholder="Industry"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <TextArea
        id="businessDescription"
        label="Business Description"
        value={businessDescription}
        placeholder="Business Description"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <TextArea
        id="location"
        label="Location"
        value={location}
        placeholder="Location"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <Input
        id="contactEmail"
        label="Contact Email"
        value={contactEmail}
        type="email"
        placeholder="Contact Email"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
      <Input
        id="website"
        label="Website"
        value={website}
        type="url"
        placeholder="Website"
        onChangeHandler={handleInputChange}
        className="bg-transparent"
      />
    </div>
  );
};
export default BusinessDetailsForm