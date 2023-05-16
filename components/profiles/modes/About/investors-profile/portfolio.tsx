import { PortfolioItem } from "@/modals/profile/investor";
import AboutCard from "../util/about-card";
import Accordian from "@/components/ui/accordian/accordian";


const Portfolio: React.FC<{ portfolio: PortfolioItem[] }> = ({
    portfolio,
}) => {
    return (
        <AboutCard>
            <Accordian heading="Portfolios">
                {portfolio.map((item) => (
                    <AboutCard className="pl-4 bg-gray2 text-grey">
                        <p className="text-lg">{`${item.industry}`}</p>
                        <div className="text-sm flex space-x-2 items-center flex-wrap">
                            {item?.website && (
                                <a href={item?.website} target="_blank">
                                    {item?.website}
                                </a>
                            )}
                        </div>
                        <p className="text-base mb-4">
                            {item.description}
                        </p>
                    </AboutCard>
                ))}
            </Accordian>
        </AboutCard>
    );
}

export default Portfolio;
