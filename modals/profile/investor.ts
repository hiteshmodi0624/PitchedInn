export interface InvestorInfo {
    userId: string;
    investorName: string;
    investorDetails: InvestorDetails;
    investments?: string[];
  }
  
  export interface InvestorDetails {
    investmentFocus: string;
    investorDescription?: string;
    location?: string;
    contactInfo?: InvestorContactInfo;
    portfolio?: PortfolioItem[];
    investmentCriteria?: InvestmentCriteria;
  }
  
  export interface InvestorContactInfo {
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
  
  export interface PortfolioItem {
    companyName: string;
    industry: string;
    description?: string;
    website?: string;
  }
  export interface InvestmentCriteria {
    industries?: string[];
    geographicFocus?: string[];
    minimumInvestmentSize?: number;
    maximumInvestmentSize?: number;
    investmentStage?: string 
  }