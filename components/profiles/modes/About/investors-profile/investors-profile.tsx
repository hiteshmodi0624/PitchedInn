import React from "react";
import SocialLinks from "../util/social-links";
import Portfolio from "./portfolio";
import InvestmentCriteria from "./investment-criteria";
import { Investor } from "@prisma/client";

const InvestorsProfile = ({ details }: { details: Investor }) => {
    const { investorName, investorDetails } = details;
    const {investmentFocus, contactInfo,investorDescription,location,portfolio,investmentCriteria}= investorDetails
    return (
        <div className="mx-4 px-4 text-grey my-8">
            <h2 className="text-3xl font-semibold mb-4 text-white">
                {investorName}
            </h2>
            <p className="text-lg">{`${investmentFocus}`}</p>
            <div className="text-sm flex space-x-2 items-center flex-wrap">
                <p>{location} - </p>
                <p>{contactInfo?.contactEmail}</p>
            </div>
            {contactInfo?.website && (
                <a
                    href={contactInfo?.website}
                    target="_blank"
                    className="text-sm"
                >
                    {contactInfo?.website}
                </a>
            )}
            <p className="text-base mb-4">{investorDescription}</p>
            {investmentCriteria && (
                <InvestmentCriteria investmentCriteria={investmentCriteria}/>
            )}
            {portfolio && (
                <Portfolio portfolio={portfolio}/>
            )}
            {contactInfo?.socialLinks && (
                <SocialLinks socialLinks={contactInfo?.socialLinks} />
            )}
        </div>
    );
};

export default InvestorsProfile;
