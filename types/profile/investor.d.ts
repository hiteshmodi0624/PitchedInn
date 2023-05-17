type InvestorInfo = {
    userId: string;
    investorName: string;
    investorDetails: InvestorDetails;
    investments?: string[];
  }
  
type InvestorDetails = {
    investmentFocus: string;
    investorDescription?: string;
    location?: string;
    contactInfo?: InvestorContactInfo;
    portfolio?: PortfolioItem[];
    investmentCriteria?: InvestmentCriteria;
  }
  
type InvestorContactInfo = {
    contactEmail?: string;
    website?: string;
    socialLinks?: SocialLinks;
  }
  
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
  }
  
type PortfolioItem = {
    companyName: string;
    industry: string;
    description?: string;
    website?: string;
  }
type InvestmentCriteria = {
    industries?: string[];
    geographicFocus?: string[];
    minimumInvestmentSize?: number;
    maximumInvestmentSize?: number;
    investmentStage?: string 
  }