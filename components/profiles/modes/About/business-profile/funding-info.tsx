import React from "react";
import Item from "../util/item";
import Accordian from "@/components/ui/accordian/accordian";
import AboutCard from "../util/about-card";
import { FundingInfo } from "@/modals/profile/business";

const FundingInfo: React.FC<{ fundingInfo: FundingInfo }> = ({
    fundingInfo,
}) => {
    return (
        <AboutCard>
            <Accordian heading="Funding Information">
                {fundingInfo.traction && (
                    <Item label="Traction" value={fundingInfo.traction} />
                )}
                {fundingInfo.milestones && (
                    <Item label="Milestones" value={fundingInfo.milestones} />
                )}
                {fundingInfo.fundingStage && (
                    <Item
                        label="Funding Stage"
                        value={fundingInfo.fundingStage}
                    />
                )}
                {fundingInfo.amountSought && (
                    <Item
                        label="Amount Sought"
                        value={fundingInfo.amountSought}
                    />
                )}
                {fundingInfo.investmentTerms && (
                    <Item
                        label="Investment Terms"
                        value={fundingInfo.investmentTerms}
                    />
                )}
            </Accordian>
        </AboutCard>
    );
}

export default FundingInfo;
