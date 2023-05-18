import React from "react";
import Accordian from "components/ui/accordian/accordian";
import AboutCard from "../util/about-card";
import Item from "../util/item";

const ExtendedBusinessInfo: React.FC<{
    extendedBusinessInfo: ExtendedBusinessInfo;
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
