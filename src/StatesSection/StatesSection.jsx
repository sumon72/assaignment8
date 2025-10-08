import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import hero from "../assets/hero.png";
const StatesSection = () => {



    return (
        <>
            <section className="bg-gradient-to-b from-[#632EE3] to-[#9F62F2] text-white py-12 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                    Trusted By Millions, Built For You
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div>
                        <p className="text-4xl font-bold">29.6M</p>
                        <p>Total Downloads</p>
                        <small>21% More Than Last Month</small>
                    </div>
                    <div>
                        <p className="text-4xl font-bold">906K</p>
                        <p>Total Reviews</p>
                        <small>46% More Than Last Month</small>
                    </div>
                    <div>
                        <p className="text-4xl font-bold">132+</p>
                        <p>Active Apps</p>
                        <small>31 More Will Launch</small>
                    </div>
                </div>
            </section>

        </>
    );
};

export default StatesSection;