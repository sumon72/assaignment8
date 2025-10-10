import { useState,useEffect } from "react";
import Banner from "../../Component/Banner/Banner.jsx"
import StatesSection from "../../Component/StatesSection/StatesSection.jsx"
import TopAppsSection from "../../Component/TopAppsSection/TopAppsSection.jsx"
import Loader from "../../Component/Loader/Loader.jsx"
const Root = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    if (loading) return <Loader />;

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