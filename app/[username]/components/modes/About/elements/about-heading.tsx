import React from 'react';
import { BsArrowDownCircleFill } from 'react-icons/bs';

interface FundingInfoItemProps {
  value: string | number;
  onClickHandler: ()=>void
}

const AboutHeading: React.FC<FundingInfoItemProps> = ({ value , onClickHandler }) => (
    <button className="flex justify-between cursor-pointer text-2xl mb-4" onClick={onClickHandler}>
        <h3 className=" font-semibold text-white">{value}</h3>
            <BsArrowDownCircleFill />
    </button>
);

export default AboutHeading;
