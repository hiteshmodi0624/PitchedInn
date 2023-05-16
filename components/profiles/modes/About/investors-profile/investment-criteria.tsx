import React from "react";
import Item from "../util/item";
import Accordian from "@/components/ui/accordian/accordian";
import AboutCard from "../util/about-card";
import { FundingInfo } from "@/modals/profile/business";
import { InvestmentCriteria } from "@/modals/profile/investor";

const InvestmentCriteria: React.FC<{ investmentCriteria: InvestmentCriteria }> = ({
    investmentCriteria,
}) => {
    const {
        geographicFocus,
        industries,
        investmentStage,
        maximumInvestmentSize,
        minimumInvestmentSize,
    } = investmentCriteria;
    return (
        <AboutCard>
            <Accordian heading="Investment Criteria">
                {geographicFocus && (
                    <Item label="geographicFocus" value={geographicFocus.join(', ')} />
                )}
                {industries && (
                    <Item label="industries" value={industries.join(', ')} />
                )}
                {investmentStage && (
                    <Item label="investmentStage" value={investmentStage.toString()} />
                )}
                {maximumInvestmentSize && (
                    <Item label="maximumInvestmentSize" value={maximumInvestmentSize.toString()} />
                )}
                {minimumInvestmentSize && (
                    <Item label="minimumInvestmentSize" value={minimumInvestmentSize.toString()} />
                )}
            </Accordian>
        </AboutCard>
    );
}

export default InvestmentCriteria;
