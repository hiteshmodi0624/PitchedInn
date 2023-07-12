import React from "react";
import SocialLinks from "../util/social-links";
import FundingInfo from "./funding-info";
import ExtendedBusinessInfo from "./extended-business-info";
import { Business } from "@prisma/client";

const BusinessProfile = ({ details }: { details: Business }) => {
    const { companyName, businessDetails } = details;
    return (
        <div className="mx-4 px-4 text-grey my-2">
            <h2 className="text-3xl font-semibold mb-4 text-white">
                {companyName}
            </h2>
            <p className="text-lg">{`${businessDetails.niche} (${businessDetails.industry})`}</p>
            <div className="text-sm flex space-x-2 items-center flex-wrap">
                <p>{businessDetails.location} - </p>
                <p>{businessDetails.businessContactInfo?.contactEmail}</p>
                {businessDetails.businessContactInfo?.website && (
                    <a
                        href={businessDetails.businessContactInfo?.website}
                        target="_blank"
                    >
                        {businessDetails.businessContactInfo?.website}
                    </a>
                )}
            </div>
            <p className="text-base mb-4">
                {businessDetails.businessDescription}
            </p>
            {businessDetails.extendedBusinessInfo && (
                <ExtendedBusinessInfo
                    extendedBusinessInfo={businessDetails.extendedBusinessInfo}
                />
            )}
            {businessDetails.fundingInfo && (
                <FundingInfo fundingInfo={businessDetails.fundingInfo} />
            )}
            {businessDetails.businessContactInfo &&
                businessDetails.businessContactInfo.socialLinks && (
                    <SocialLinks
                        socialLinks={
                            businessDetails.businessContactInfo?.socialLinks
                        }
                    />
                )}
        </div>
    );
};

export default BusinessProfile;
