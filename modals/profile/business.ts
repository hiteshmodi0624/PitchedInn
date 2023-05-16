export interface BusinessInfo {
    userId: string;
    companyName: string;
    businessDetails: BusinessDetails;
    posts?: string[];
}

export interface BusinessDetails {
    niche?: string;
    industry: string;
    businessDescription?: string;
    location?: string;
    businessContactInfo?: BusinessContactInfo;
    fundingInfo?: FundingInfo;
    extendedBusinessInfo?: ExtendedBusinessInfo;
}

export interface BusinessContactInfo {
    contactEmail?: string;
    website?: string;
    socialLinks?: SocialLinks;
}

export interface SocialLinks {
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

