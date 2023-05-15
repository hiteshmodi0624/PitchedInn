import React from "react";
import Item from "./elements/item";
import { ExtendedBusinessInfo as ExtendedBusinessInfoType } from "@/modals/business-profile";
import Accordian from "@/components/ui/accordian/accordian";
import AboutCard from "./elements/about-card";

const ExtendedBusinessInfo: React.FC<{
    extendedBusinessInfo: ExtendedBusinessInfoType;
}> = ({ extendedBusinessInfo }) => {
  return (
      <AboutCard>
          <Accordian heading="Business Information">
              {extendedBusinessInfo.usp && (
                  <Item
                      label="Unique Selling Proposition"
                      value={extendedBusinessInfo.usp}
                  />
              )}
              {extendedBusinessInfo.problemStatement && (
                  <Item
                      label="Problem Statement"
                      value={extendedBusinessInfo.problemStatement}
                  />
              )}
              {extendedBusinessInfo.solution && (
                  <Item
                      label="Solution"
                      value={extendedBusinessInfo.solution}
                  />
              )}
              {extendedBusinessInfo.targetMarket && (
                  <Item
                      label="Target Market"
                      value={extendedBusinessInfo.targetMarket}
                  />
              )}
              {extendedBusinessInfo.competitiveLandscape && (
                  <Item
                      label="Competitive Landscape"
                      value={extendedBusinessInfo.competitiveLandscape}
                  />
              )}
              {extendedBusinessInfo.businessModel && (
                  <Item
                      label="Business Model"
                      value={extendedBusinessInfo.businessModel}
                  />
              )}
              {extendedBusinessInfo.goMarketStrategy && (
                  <Item
                      label="Go-to-Market Strategy"
                      value={extendedBusinessInfo.goMarketStrategy}
                  />
              )}
              {extendedBusinessInfo.teamInfo && (
                  <Item
                      label="Team Information"
                      value={extendedBusinessInfo.teamInfo}
                  />
              )}
              {extendedBusinessInfo.financialInfo && (
                  <Item
                      label="Financial Information"
                      value={extendedBusinessInfo.financialInfo}
                  />
              )}
          </Accordian>
      </AboutCard>
  );
}
export default ExtendedBusinessInfo;
