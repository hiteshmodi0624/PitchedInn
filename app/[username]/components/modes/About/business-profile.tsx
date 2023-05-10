import React from 'react';
import { BusinessProfile as BusinessProfileType } from '@/modals/business-profile';
import SocialLinks from './social-links';
import FundingInfo from './funding-info';
import ExtendedBusinessInfo from './extended-business-info';

interface BusinessProfileProps {
  businessProfile: BusinessProfileType;
}

const BusinessProfile: React.FC<BusinessProfileProps> = ({ businessProfile }) => {
  const { companyName, businessDetails } = businessProfile;

  return (
      <div className="mx-4 px-4 text-grey my-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">
              {companyName}
          </h2>
          {businessDetails && (
              <>
                  <p className="text-lg">{`${businessDetails.niche} (${businessDetails.industry})`}</p>
                  <div className="text-sm flex space-x-2 items-center flex-wrap">
                      <p>{businessDetails.location} - </p>
                      <p>{businessDetails.BusinessContactInfo.contactEmail}</p>
                  </div>
                  <p className="text-base mb-4">
                      {businessDetails.businessDescription}
                  </p>
                  {businessDetails.ExtendedBusinessInfo && (
                      <ExtendedBusinessInfo
                          extendedBusinessInfo={
                              businessDetails.ExtendedBusinessInfo
                          }
                      />
                  )}
                  {businessDetails.FundingInfo && (
                      <FundingInfo fundingInfo={businessDetails.FundingInfo} />
                  )}
                  <SocialLinks
                      socialLinks={
                          businessDetails.BusinessContactInfo.socialLinks
                      }
                  />
              </>
          )}
      </div>
  );
};

export default BusinessProfile;
