import React, { PropsWithChildren } from 'react';


const AboutCard: React.FC<PropsWithChildren<{className?:string}>> = ({ children ,className }) => (
    <div className={`bg-gray p-4 rounded-lg my-4 overflow-hidden ${className}`}>
        {children}
    </div>
);

export default AboutCard;
