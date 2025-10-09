import React from "react";
import Banner from "../../Component/Banner/Banner.jsx"
import StatesSection from "../../Component/StatesSection/StatesSection.jsx"
import TopAppsSection from "../../Component/TopAppsSection/TopAppsSection.jsx"
const Root = () => {
    return (
        <>
            <div>
                <Banner></Banner>
                <StatesSection></StatesSection>
                <TopAppsSection></TopAppsSection>
            </div>

        </>
    );
};

export default Root;