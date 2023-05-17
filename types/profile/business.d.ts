type BusinessInfo = {
    userId: string;
    companyName: string;
    businessDetails: BusinessDetails;
    posts?: string[];
};

type BusinessDetails = {
    niche?: string;
    industry: string;
    businessDescription?: string;
    location?: string;
    businessContactInfo?: BusinessContactInfo;
    fundingInfo?: FundingInfo;
    extendedBusinessInfo?: ExtendedBusinessInfo;
};

type BusinessContactInfo = {
    contactEmail?: string;
    website?: string;
    socialLinks?: SocialLinks;
};

type SocialLinks = {
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

type FundingInfo = {
    traction?: string;
    milestones?: string;
    fundingStage?: string;
    amountSought?: string;
    investmentTerms?: string;
};

type ExtendedBusinessInfo = {
    usp?: string;
    problemStatement?: string;
    solution?: string;
    targetMarket?: string;
    competitiveLandscape?: string;
    businessModel?: string;
    goMarketStrategy?: string;
    teamInfo?: string;
    financialInfo?: string;
};
