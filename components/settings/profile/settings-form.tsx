import { ChangeEventHandler, useEffect, useReducer, useRef, useState } from "react";
import { User } from "@prisma/client";
import { dobReducer } from "components/auth/reducers";
import DefaultForm from './default-form';
import BusinessProfileForm from './business/business-profile';
import { trpc } from '~/utils/trpc';
import ContentLayout from 'components/shared/content-layout/content-layout';
import ProfileSettingsButtons from './profile-settings-buttons';
import { useRouter } from "next/router";
export type pageType = "default"|"business-details"|"business-funding-info"|"business-social-links"|"business-extended-info";
const ProfileSettingsForm = ({ profile, hide }: { profile: User, hide:()=>void }) => {
  const [page,setPage]=useState<pageType>("default");
  const [name, setName] = useState(profile.name ?? "");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [username, setUsername] = useState(profile.username ?? "");
  const [usernameIsTouched, setUsernameIsTouched] = useState(false);
  const [bio, setBio] = useState(profile.bio ?? "");
  const [type, setType] = useState(profile.userType ?? "Regular");
  const [coverImage, setCoverImage] = useState<string>(profile.coverImage ?? "");
  const [profileImage, setProfileImage] = useState<string>(profile.image ?? "");
  const [companyName, setCompanyName] = useState(profile.business?.companyName ??"");
  const [niche, setNiche] = useState(profile.business?.businessDetails.niche ??"");
  const [industry, setIndustry] = useState(profile.business?.businessDetails.industry??"");
  const [businessDescription, setBusinessDescription] = useState(profile.business?.businessDetails.businessDescription??"");
  const [location, setLocation] = useState(profile.business?.businessDetails.location??"");
  const [contactEmail, setContactEmail] = useState(profile.business?.businessDetails.businessContactInfo.contactEmail??"");
  const [website, setWebsite] = useState(profile.business?.businessDetails.businessContactInfo.website??"");
  const [socialLinks, setSocialLinks] = useState({
    linkedIn:profile.business?.businessDetails.businessContactInfo.socialLinks.linkedIn?? "",
    twitter:profile.business?.businessDetails.businessContactInfo.socialLinks.twitter?? "",
    instagram:profile.business?.businessDetails.businessContactInfo.socialLinks.instagram?? "",
    facebook:profile.business?.businessDetails.businessContactInfo.socialLinks.facebook?? "",
    youtube:profile.business?.businessDetails.businessContactInfo.socialLinks.youtube?? "",
    pinterest:profile.business?.businessDetails.businessContactInfo.socialLinks.pinterest?? "",
    medium:profile.business?.businessDetails.businessContactInfo.socialLinks.medium?? "",
    github:profile.business?.businessDetails.businessContactInfo.socialLinks.github?? "",
    behance:profile.business?.businessDetails.businessContactInfo.socialLinks.behance?? "",
    dribbble:profile.business?.businessDetails.businessContactInfo.socialLinks.dribbble?? "",
    snapchat:profile.business?.businessDetails.businessContactInfo.socialLinks.snapchat?? "",
    tiktok:profile.business?.businessDetails.businessContactInfo.socialLinks.tiktok?? "",
    clubhouse:profile.business?.businessDetails.businessContactInfo.socialLinks.clubhouse?? "",
    telegram:profile.business?.businessDetails.businessContactInfo.socialLinks.telegram?? "",
  });
  const [traction, setTraction] = useState(profile.business?.businessDetails.fundingInfo.traction??"");
  const [milestones, setMilestones] = useState(profile.business?.businessDetails.fundingInfo.milestones??"");
  const [fundingStage, setFundingStage] = useState(profile.business?.businessDetails.fundingInfo.fundingStage??"");
  const [amountSought, setAmountSought] = useState(profile.business?.businessDetails.fundingInfo.amountSought??"");
  const [investmentTerms, setInvestmentTerms] = useState(profile.business?.businessDetails.fundingInfo.investmentTerms??"");
  const [usp, setUsp] = useState(profile.business?.businessDetails.extendedBusinessInfo.usp??"");
  const [problemStatement, setProblemStatement] = useState(profile.business?.businessDetails.extendedBusinessInfo.problemStatement??"");
  const [solution, setSolution] = useState(profile.business?.businessDetails.extendedBusinessInfo.solution??"");
  const [targetMarket, setTargetMarket] = useState(profile.business?.businessDetails.extendedBusinessInfo.targetMarket??"");
  const [competitiveLandscape, setCompetitiveLandscape] = useState(profile.business?.businessDetails.extendedBusinessInfo.competitiveLandscape??"");
  const [businessModel, setBusinessModel] = useState(profile.business?.businessDetails.extendedBusinessInfo.businessModel??"");
  const [goMarketStrategy, setGoMarketStrategy] = useState(profile.business?.businessDetails.extendedBusinessInfo.goMarketStrategy??"");
  const [teamInfo, setTeamInfo] = useState(profile.business?.businessDetails.extendedBusinessInfo.teamInfo??"");
  const [financialInfo, setFinancialInfo] = useState(
    profile.business?.businessDetails.extendedBusinessInfo.financialInfo ?? ""
  );
  const date = profile.dob;
  const dobInitialValue = {
    date: date?.getDate() ?? new Date().getDate(),
    month: date?.getMonth() ?? new Date().getMonth() + 1,
    year: date?.getFullYear() ?? new Date().getFullYear() - 18,
  };
  const [dob, dispatchDOB] = useReducer(dobReducer, dobInitialValue);
  const DOBChangeHandler: ChangeEventHandler<HTMLOptionElement> = (event) => {
    const { id: type, value } = event.target;
    if (type === "date" || type === "month" || type === "year")
      dispatchDOB({ type, value: +value });
  };
  const handleDefaultFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "name") {
      setName(event.target.value);
      setNameIsTouched(true);
    } else if (event.target.id === "username"){
      setUsername(event.target.value);
      setUsernameIsTouched(true);
    } 
    else if (event.target.id === "bio") setBio(event.target.value);
    else if (event.target.id === "type") {
      if (
        event.target.value === "Collector" ||
        event.target.value === "Business" ||
        event.target.value === "Investor" ||
        event.target.value === "Regular"
      ) {
        setType(event.target.value);
      }}
    else if (event.target.id === "coverimage") setCoverImage(event.target.value);
    else if (event.target.id === "profileimage") setProfileImage(event.target.value);
  };
  const handleBusinessFromChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case "companyName":
        setCompanyName(value);
        break;
      case "niche":
        setNiche(value);
        break;
      case "industry":
        setIndustry(value);
        break;
      case "businessDescription":
        setBusinessDescription(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "contactEmail":
        setContactEmail(value);
        break;
      case "website":
        setWebsite(value);
        break;
      case "traction":
        setTraction(value);
        break;
      case "milestones":
        setMilestones(value);
        break;
      case "fundingStage":
        setFundingStage(value);
        break;
      case "amountSought":
        setAmountSought(value);
        break;
      case "investmentTerms":
        setInvestmentTerms(value);
        break;
      case "usp":
        setUsp(value);
        break;
      case "problemStatement":
        setProblemStatement(value);
        break;
      case "solution":
        setSolution(value);
        break;
      case "targetMarket":
        setTargetMarket(value);
        break;
      case "competitiveLandscape":
        setCompetitiveLandscape(value);
        break;
      case "businessModel":
        setBusinessModel(value);
        break;
      case "goMarketStrategy":
        setGoMarketStrategy(value);
        break;
      case "teamInfo":
        setTeamInfo(value);
        break;
      case "financialInfo":
        setFinancialInfo(value);
        break;
      default:
        if (id in socialLinks) {
          setSocialLinks((prevSocialLinks) => ({
            ...prevSocialLinks,
            [id]: value,
          }));
        }
        break;
    }
  };
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(()=>{
    if(formRef.current){
      formRef.current.scrollTo(0,0);
    }
  },[page])
  const router=useRouter();
  const modifyUser=trpc.user.modifyUser.useMutation();
  const onSubmitHandler=()=>{
    modifyUser.mutate({dob:new Date(dob.year,dob.month,dob.date),name,username,bio,userType:type});
  }
  useEffect(()=>{
    const modifyData=async()=>{
      if (modifyUser.data) {
        router.replace(`/${modifyUser.data.username}`, undefined, {
          shallow: true,
        });
        hide();
      }
    }
    modifyData();
  },[modifyUser.data,username,router,hide])
  return (
    <ContentLayout
      page="Edit Profile"
      headerContent={
        <ProfileSettingsButtons hide={hide} submit={onSubmitHandler} />
      }
    >
      <div className={`aspect-square h-full w-full overflow-hidden bg-black`}>
        <form
          className="mx-0 h-full overflow-scroll text-left text-black "
          ref={formRef}
          onSubmit={onSubmitHandler}
        >
          {page === "default" && (
            <DefaultForm
              coverImage={coverImage}
              profileImage={profileImage}
              name={name}
              bio={bio}
              username={username}
              nameIsTouched={nameIsTouched}
              usernameIsTouched={usernameIsTouched}
              onChangeHandler={handleDefaultFormChange}
              dob={dob}
              DOBChangeHandler={DOBChangeHandler}
              type={type}
              profileUsername={profile.username!}
              page={page}
              setPage={setPage}
            />
          )}
          {type === "Business" && page.includes("business") && (
            <div className="mx-10 mb-5">
              <BusinessProfileForm
                companyName={companyName}
                niche={niche}
                industry={industry}
                businessDescription={businessDescription}
                location={location}
                contactEmail={contactEmail}
                website={website}
                socialLinks={socialLinks}
                traction={traction}
                milestones={milestones}
                fundingStage={fundingStage}
                amountSought={amountSought}
                investmentTerms={investmentTerms}
                usp={usp}
                problemStatement={problemStatement}
                solution={solution}
                targetMarket={targetMarket}
                competitiveLandscape={competitiveLandscape}
                businessModel={businessModel}
                goMarketStrategy={goMarketStrategy}
                teamInfo={teamInfo}
                financialInfo={financialInfo}
                handleInputChange={handleBusinessFromChange}
                page={page}
                setPage={setPage}
              />
            </div>
          )}
        </form>
      </div>
    </ContentLayout>
  );
};
export default ProfileSettingsForm;
