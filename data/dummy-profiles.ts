export const businessProfiles: ProfileMap<"business">[] = [
    {
        userId: "abccompany",
        companyName: "ABC Company",
        businessDetails: {
            niche: "Technology",
            industry: "Software Development",
            businessDescription: "We provide cutting-edge software solutions.",
            location: "New York",
            businessContactInfo: {
                contactEmail: "contact@abccompany.com",
                website: "https://abccompany.com",
                socialLinks: {
                    linkedIn: "https://www.linkedin.com/company/abccompany",
                    twitter: "https://twitter.com/abccompany",
                    instagram: "https://www.instagram.com/abccompany",
                    facebook: "https://www.facebook.com/abccompany",
                },
            },
            fundingInfo: {
                traction: "Growing customer base",
                milestones: "Reached 100,000 users",
                fundingStage: "Series A",
                amountSought: "10,000,000",
                investmentTerms: "Equity investment",
            },
            extendedBusinessInfo: {
                usp: "Innovative and user-friendly software solutions",
                problemStatement:
                    "Addressing the challenge of outdated systems",
                solution: "Developing customized software solutions",
                targetMarket: "Small and medium-sized businesses",
                competitiveLandscape:
                    "Competing with established software companies",
                businessModel: "Subscription-based model",
                goMarketStrategy: "Digital marketing and partnerships",
                teamInfo: "Experienced team with diverse expertise",
                financialInfo: "Revenue growth of 50% in the past year",
            },
        },
        posts:["post1","post2","post5"]
    },
    {
        userId: "pqrenterprises",
        companyName: "PQR Enterprises",
        businessDetails: {
            niche: "E-commerce",
            industry: "Retail",
            businessDescription: "We offer a wide range of products online.",
            location: "Los Angeles",
            businessContactInfo: {
                contactEmail: "contact@pqrenterprises.com",
                website: "https://pqrenterprises.com",
                socialLinks: {
                    linkedIn: "https://www.linkedin.com/company/pqrenterprises",
                    twitter: "https://twitter.com/pqrenterprises",
                    instagram: "https://www.instagram.com/pqrenterprises",
                    facebook: "https://www.facebook.com/pqrenterprises",
                },
            },
            fundingInfo: {
                traction: "Rapid revenue growth",
                milestones: "Expanded to international markets",
                fundingStage: "Series B",
                amountSought: "20,000,000",
                investmentTerms: "Equity investment with profit sharing",
            },
            extendedBusinessInfo: {
                usp: "High-quality products with fast shipping",
                problemStatement: "Meeting customer demand for online shopping",
                solution:
                    "Curated selection of products and seamless shopping experience",
                targetMarket: "Global online shoppers",
                competitiveLandscape:
                    "Competing with major e-commerce platforms",
                businessModel: "Direct-to-consumer",
                goMarketStrategy:
                    "Digital advertising and influencer partnerships",
                teamInfo:
                    "Dedicated team with expertise in logistics and customer service",
                financialInfo:
                    "Gross merchandise value of $10 million in the past year",
            },
        },
        posts:["post3","post4"]
    },
];

export const collectorProfiles: ProfileMap<"collector">[] = [
    {
        collectedPosts:["post1","post5"],
        collectorsRank:1,
        userId:"janesmith"
    },
    {
        collectedPosts:["post1","post2","post4"],
        collectorsRank:2,
        userId:"markdavis"
    }
];
export const investorProfiles: ProfileMap<"investor">[] = [
    {
        userId: "robertjohnson",
        investorName: "John Doe",
        investorDetails: {
          investmentFocus: "Technology",
          investorDescription: "Experienced investor looking for early-stage tech startups.",
          location: "San Francisco, CA",
          contactInfo: {
            contactEmail: "john.doe@example.com",
            website: "https://example.com",
            socialLinks: {
              linkedIn: "https://www.linkedin.com/in/johndoe",
              twitter: "https://twitter.com/johndoe",
            },
          },
          portfolio: [
            {
              companyName: "TechCo",
              industry: "Technology",
              description: "Revolutionizing the tech industry with innovative products.",
              website: "https://techco.com",
            },
            {
              companyName: "InnoTech",
              industry: "Software",
              description: "Building cutting-edge software solutions for businesses.",
              website: "https://innotech.com",
            },
          ],
          investmentCriteria: {
            industries: ["Technology", "Healthcare"],
            geographicFocus: ["United States", "Europe"],
            minimumInvestmentSize: 100000,
            maximumInvestmentSize: 1000000,
            investmentStage:"seed"
          },
        },
        investments: ["abccompany", "def456"],
      },
      {
        userId: "xyzinvestments",
        investorName: "Jane Smith",
        investorDetails: {
          investmentFocus: "Healthcare",
          investorDescription: "Passionate about investing in healthcare startups.",
          location: "New York, NY",
          contactInfo: {
            contactEmail: "jane.smith@example.com",
            website: "https://example.com",
            socialLinks: {
              linkedIn: "https://www.linkedin.com/in/janesmith",
              twitter: "https://twitter.com/janesmith",
              instagram: "https://www.instagram.com/janesmith",
            },
          },
          portfolio: [
            {
              companyName: "MedTech Solutions",
              industry: "Healthcare",
              description: "Developing advanced medical technologies for improved patient care.",
              website: "https://medtechsolutions.com",
            },
            {
              companyName: "Pharma Innovations",
              industry: "Pharmaceuticals",
              description: "Creating innovative drug formulations to address unmet medical needs.",
              website: "https://pharmainnovations.com",
            },
          ],
          investmentCriteria: {
            industries: ["Technology", "Healthcare"],
            geographicFocus: ["United States", "Europe"],
            minimumInvestmentSize: 100000,
            maximumInvestmentSize: 1000000,
            investmentStage:"seed"
          },
        },
        investments: ["xyz789", "uvw456", "rst123"],
      }
];

export const profiles: Profile[] = [
    {
        id: "johndoe",
        name: "John Doe",
        username: "johndoe",
        backgroundImage: "back.jpeg",
        profilePic:"logo.png",
        bio: "Welcome to my profile!",
        userType: "common",
        followers: [],
        following: [], 
        savedPosts: [],
    },
    {
        id: "janesmith",
        bio: "Welcome to my profile! I am passionate about art and creativity!",
        name: "Jane Smith",
        username: "janesmith",
        backgroundImage: "back.jpeg",
        profilePic:"logo.png",
        userType: "collector",
        followers: [],
        following: [], 
        savedPosts: [],
    },
    {
        id: "robertjohnson",
        bio: "Welcome to my profile! I am passionate about art and creativity!",
        name: "Robert Johnson",
        username: "robertjohnson",
        backgroundImage: "back.jpeg",
        profilePic:"logo.png",
        userType: "investor",
        followers: [],
        following: [], 
        savedPosts: [],
    },
    {
        id: "abccompany",
        bio: "Welcome to my profile! I am passionate about art and creativity!",
        name: "ABC Company",
        username: "abccompany",
        backgroundImage: "back.jpeg",
        profilePic:"logo.png",
        userType: "business",
        followers: [],
        following: [], 
        savedPosts: [],
    },
    {
        id: "sarahthompson",
        name: "Sarah Thompson",
        username: "sarahthompson",
        backgroundImage: "back.jpeg",
        profilePic:"logo.png",
        bio: "Welcome to my profile! I am passionate about art and creativity!",
        userType: "common",
        followers: [],
        following: [], 
        savedPosts: [],
    },
    {
        id: "markdavis",
        bio: "Welcome to my profile! I am passionate about art and creativity!",
        name: "Mark Davis",
        username: "markdavis",
        backgroundImage: "back.jpeg",
        profilePic:"logo.png",
        userType: "collector",
        followers: [],
        following: [], 
        savedPosts: [],
    },
    {
        id: "xyzinvestments",
        bio: "Welcome to my profile! I am passionate about art and creativity!",
        name: "XYZ Investments",
        username: "xyzinvestments",
        backgroundImage: "back.jpeg",
        profilePic:"logo.png",
        userType: "investor",
        followers: [],
        following: [], 
        savedPosts: [],
    },
    {
        id: "pqrenterprises",
        bio: "Welcome to my profile! I am passionate about art and creativity!",
        name: "PQR Enterprises",
        username: "pqrenterprises",
        backgroundImage: "back.jpeg",
        profilePic:"logo.png",
        userType: "business",
        followers: [],
        following: [], 
        savedPosts: [],
    },
];
