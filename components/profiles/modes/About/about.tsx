import { Business, Collector, Investor } from "@prisma/client";
import BusinessProfile from "./business-profile/business-profile";
import InvestorsProfile from "./investors-profile/investors-profile";

const About = ({ details }: { details: Business | Investor | null}) => {
    if(details===null) return <div></div>
  return (
    <>
      {"companyName" in details ? (
        <BusinessProfile details={details} />
      ) : (
        <InvestorsProfile details={details} />
      )}
    </>
  );
};

export default About;
