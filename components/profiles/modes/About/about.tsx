import BusinessProfile from "./business-profile/business-profile";
import { useRouter } from "next/router";
import { ProfileMap } from "@/modals/profile/profile";
import InvestorsProfile from "./investors-profile/investors-profile";

const About=({details}:{details:ProfileMap<"business">|ProfileMap<"investor">})=>{
    return (
        <>
            {"companyName" in details ? (
                <BusinessProfile details={details} />
            ) : (
                <InvestorsProfile details={details} />
            )}
        </>
    );
  }
  
export default About;
