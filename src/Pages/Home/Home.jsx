import React from "react";
import Banner from "../../Banner/Banner.jsx"
import StatesSection from "../../StatesSection/StatesSection.jsx"
import TopAppsSection from "../../TopAppsSection/TopAppsSection.jsx"
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