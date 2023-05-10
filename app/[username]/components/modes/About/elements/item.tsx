import React from 'react';

interface FundingInfoItemProps {
  label: string;
  value: string | number;
}

const Item: React.FC<FundingInfoItemProps> = ({ label, value }) => (
  <p className="mb-2">
    <span className=" text-white">{label}:</span> {value}
  </p>
);

export default Item;
