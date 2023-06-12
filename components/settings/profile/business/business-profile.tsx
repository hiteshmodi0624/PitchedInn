import { ChangeEventHandler } from "react";
import Input from "../../../ui/inputs/input";
import { z } from "zod";
import { SocialLinks } from "@prisma/client";
import BusinessDetailsForm from "./business-details";
import FundingInfoForm from "./funding-info";
import ExtendedBusinessInfoForm from "./extended-business-info";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { pageType } from "../settings-form";
import ContentLayout from "components/shared/content-layout/content-layout";

const BusinessProfileForm = ({
  companyName,
  niche,
  industry,
  businessDescription,
  location,
  contactEmail,
  website,
  socialLinks,
  traction,
  milestones,
  fundingStage,
  amountSought,
  investmentTerms,
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
  page,
  setPage,
}: {
  companyName: string;
  niche: string;
  industry: string;
  businessDescription: string;
  location: string;
  contactEmail: string;
  website: string;
  socialLinks: SocialLinks;
  traction: string;
  milestones: string;
  fundingStage: string;
  amountSought: string;
  investmentTerms: string;
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
  page: pageType;
  setPage: (page: pageType) => void;
}) => {
  return (
    <ContentLayout
      cardClassName="w-full !border-0"
      headerContent={
        <>
          <div className="flex items-center justify-between">
            <button
              className="flex items-center justify-start pt-3 text-base text-white  hover:opacity-80"
              onClick={(event) => {
                event.preventDefault();
                if (page === "business-details") setPage("default");
                else if (page === "business-funding-info")
                  setPage("business-details");
                else if (page === "business-social-links")
                  setPage("business-funding-info");
                else if (page === "business-extended-info")
                  setPage("business-social-links");
              }}
            >
              <AiOutlineArrowLeft className="text-xl" />
              Back
            </button>

            <h1 className="text-center text-2xl font-bold text-white">
              {page === "business-details"
                ? "Business Details"
                : page === "business-social-links"
                ? "Social Links"
                : page === "business-funding-info"
                ? "Funding Information"
                : "More Business Information"}
            </h1>
            <button
              className={`flex items-center justify-end pt-3 text-base text-white hover:opacity-80 ${
                page === "business-extended-info" &&
                "cursor-default opacity-0 hover:opacity-0"
              }`}
              onClick={(event) => {
                event.preventDefault();
                if (page === "business-details")
                  setPage("business-funding-info");
                else if (page === "business-funding-info")
                  setPage("business-social-links");
                else if (page === "business-social-links")
                  setPage("business-extended-info");
              }}
            >
              Next
              <AiOutlineArrowRight className="text-xl" />
            </button>
          </div>
          <p className="text-center text-sm text-grey">
            (All fields are optional)
          </p>
        </>
      }
    >
      {page === "business-details" && (
        <BusinessDetailsForm
          businessDescription={businessDescription}
          companyName={companyName}
          contactEmail={contactEmail}
          industry={industry}
          location={location}
          niche={niche}
          website={website}
          handleInputChange={handleInputChange}
        />
      )}
      {page === "business-social-links" && (
        <div className="Social_Links">
          {Object.entries(socialLinks).map(([name, value]) => (
            <Input
              key={name}
              id={name}
              label={name}
              value={value!}
              type="url"
              placeholder={name}
              onChangeHandler={handleInputChange}
              className="bg-transparent"
              isValid={
                value === "" || z.string().url().safeParse(value).success
              }
              error="Invalid URL. The URL must start with http:// or https://"
            />
          ))}
        </div>
      )}
      {page === "business-funding-info" && (
        <FundingInfoForm
          traction={traction}
          milestones={milestones}
          fundingStage={fundingStage}
          amountSought={amountSought}
          investmentTerms={investmentTerms}
          handleInputChange={handleInputChange}
        />
      )}
      {page === "business-extended-info" && (
        <ExtendedBusinessInfoForm
          usp={usp}
          problemStatement={problemStatement}
          solution={solution}
          targetMarket={targetMarket}
          competitiveLandscape={competitiveLandscape}
          businessModel={businessModel}
          goMarketStrategy={goMarketStrategy}
          teamInfo={teamInfo}
          financialInfo={financialInfo}
          handleInputChange={handleInputChange}
        />
      )}
    </ContentLayout>
  );
};

export default BusinessProfileForm;
