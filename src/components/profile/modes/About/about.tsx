import { dummyBusinessProfile } from "../../../../data/dummy-business-profile";
import BusinessProfile from "./business-profile";

const About=()=>{
    return (
        <BusinessProfile businessProfile={dummyBusinessProfile}/>
    );
  }
  
export default About;
