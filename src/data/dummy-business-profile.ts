import { BusinessProfile } from "../../modals/business-profile";

export const dummyBusinessProfile:BusinessProfile = {
    title: "CEO",
    companyName: "TechyCorp",
    businessDetails: {
        niche: "Software Development",
        businessDescription:
            "We create innovative software solutions for businesses.",
        BusinessContactInfo: {
            contactEmail: "info@techycorp.com",
            industry: "Information Technology",
            location: "New York, NY",
            website: "https://www.techycorp.com",
            socialLinks: {
                linkedIn: "https://www.linkedin.com/in/techycorp/",
                twitter: "https://twitter.com/techycorp",
                instagram: "https://www.instagram.com/techycorp/",
                facebook: "https://www.facebook.com/techycorp",
                youtube: "https://www.youtube.com/channel/techycorp",
                pinterest: "https://www.pinterest.com/techycorp",
                medium: "https://medium.com/@techycorp",
                github: "https://github.com/techycorp",
                behance: "https://www.behance.net/techycorp",
                dribbble: "https://dribbble.com/techycorp",
                snapchat: "https://www.snapchat.com/add/techycorp",
                tiktok: "https://www.tiktok.com/@techycorp",
                clubhouse: "https://www.clubhouse.com/@techycorp",
                telegram: "https://t.me/techycorp",
            },
        },
        FundingInfo: {
            traction: "5000+ active users",
            milestones: "Featured in top tech magazines",
            fundingStage: "Series A",
            amountSought: "2,000,000 USD",
            investmentTerms: "20% equity",
        },
        ExtendedBusinessInfo: {
            usp: "Customizable software solutions with a focus on user experience",
            problemStatement:
                "Many businesses struggle with off-the-shelf software that doesn't meet their specific needs.",
            solution:
                "We provide tailor-made software solutions that cater to the unique requirements of each client.",
            targetMarket:
                "Small to medium-sized businesses in the United States",
            competitiveLandscape:
                "There are several competitors in the market, but our focus on user experience sets us apart.",
            businessModel: "Subscription-based pricing with tiered plans",
            goMarketStrategy:
                "We reach our target market through content marketing, industry events, and targeted advertising.",
            teamInfo:
                "Our team consists of experienced software engineers, product managers, and UX/UI designers.",
            financialInfo:
                "In the previous fiscal year, we generated a revenue of 1,000,000 USD with a net profit margin of 20%.",
        },
    },
};