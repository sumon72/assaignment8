import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import AppsData from '../../AppsData.json';
import Rating_Icon from "../../assets/icon-ratings.png";
const Apps = () => {

    return (
        <>
            <section className="py-16 px-4 bg-base-100 text-center">
                <h2 className="text-3xl font-bold">Our All Applications</h2>
                <p className="text-gray-500 mt-2">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>

                <div className="max-w-6xl mx-auto flex justify-between mt-10">
                    <div>
                        <span>(132)</span><span> Apps Found</span>
                    </div>

                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow input-sm" placeholder="search Apps" />
                    </label>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5 max-w-6xl mx-auto">

                    {AppsData.map((app, i) => (
                        <div
                            key={i}
                            className="card bg-base-200 shadow-md p-4 hover:shadow-xl transition"
                        >
                            {/* Image fills the preview area */}
                            <div className="w-full h-40 mb-4 overflow-hidden rounded-xl">
                                <img
                                    src={app.image}
                                    alt={app.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>

                            <h3 className="font-medium">{app.title}</h3>

                            <div className="flex justify-between items-center mt-2 text-sm">
                                <span className="text-[#00D390]"><FontAwesomeIcon icon={faDownload} /> 9M</span>
                                <span className="flex items-center space-x-1 bg-[#FFF0E1] px-3 py-1 rounded-full text-[#FF8811]">
                                    <img src={Rating_Icon} alt="Rating Icon" className="h-4 w-4" />
                                    <span>5</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

        </>
    );
};

export default Apps;