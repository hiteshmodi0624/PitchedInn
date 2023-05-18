"use client"

import DetailedProfileSummary from "components/shared/account/detailed-profile-summary";

const DetailedProfilesList=({list}:{list:Profile[]})=>{
    return (
        <>
            {list.map((profile) => (
                <div
                    key={profile.id}
                    className=" hover:bg-gray2 p-2.5 px-6 flex-grow flex flex-col"
                >
                    <DetailedProfileSummary profile={profile}/>
                </div>
            ))}
        </>
    );
}
export default DetailedProfilesList;
