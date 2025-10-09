import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay,faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import hero from "../../assets/hero.png";
const Banner = () => {



    return (
        <>
            <section className="text-center pt-16 bg-base-100">
                <h1 className="text-4xl md:text-5xl font-bold">
                    We Build <br></br> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">Productive</span> Apps
                </h1>
                <p className="text-gray-500 max-w-3xl mx-auto mt-4">
                    At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <a href="https://play.google.com/store/games?hl=en" className="btn btn-outline"><FontAwesomeIcon icon={faGooglePlay}  /> Google Play</a>
                    <a href="https://www.apple.com/app-store/" className="btn btn-outline"><FontAwesomeIcon icon={faAppStoreIos} />App Store</a>
                </div>

                <div className="mt-10 flex justify-center">
                    <img
                        src={hero}
                        alt="App Preview"
                        className="w-64 md:w-80  drop-shadow-xl"
                    />
                </div>
            </section>

        </>
    );
};

export default Banner;