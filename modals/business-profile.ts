export interface socialLinks{
    linkedIn?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
    pinterest?: string;
    medium?: string;
    github?: string;
    behance?: string;
    dribbble?: string;
    snapchat?: string;
    tiktok?: string;
    clubhouse?: string;
    telegram?: string;
};

export interface BusinessContactInfo {
    contactEmail: string;
    website?: string;
    socialLinks?:socialLinks
}

export interface FundingInfo {
    traction?: string;
    milestones?: string;
    fundingStage?: string;
    amountSought?: string;
    investmentTerms?: string;
}

export interface ExtendedBusinessInfo {
    usp?: string;
    problemStatement?: string;
    solution?: string;
    targetMarket?: string;
    competitiveLandscape?: string;
    businessModel?: string;
    goMarketStrategy?: string;
    teamInfo?: string;
    financialInfo?: string;
}

export interface BusinessProfileDetails {
    niche: string;
    industry: string;
    businessDescription: string;
    location?: string;
    BusinessContactInfo:BusinessContactInfo;
    FundingInfo?:FundingInfo;
    ExtendedBusinessInfo?:ExtendedBusinessInfo;
  }

export interface BusinessProfile {
    companyName: string;
    businessDetails: BusinessProfileDetails;
  }