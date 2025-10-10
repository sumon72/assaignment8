import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Rating_Icon from "../../assets/icon-ratings.png";
import DownloadIcon from "../../assets/icon-downloads.png";
import { NavLink } from "react-router";
import AppsData from '../../AppsData.json';

const TopAppsSection = () => {

    return (
        <>
            <section className="py-16 px-4 bg-base-100 text-center">
                <h2 className="text-3xl font-bold">Trending Apps</h2>
                <p className="text-gray-500 mt-2">
                    Explore all trending apps on the market developed by us
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
                    {AppsData.slice(0, 8).map((app, i) => (
                          <NavLink to={`/AppDetails/${app.id}`}>
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
                                <span className="text-[#00D390]"><FontAwesomeIcon icon={faDownload} />{app.downloads}M</span>
                                <span className="flex items-center space-x-1 bg-[#FFF0E1] px-3 py-1 rounded-full text-[#FF8811]">
                                    <img src={Rating_Icon} alt="Rating Icon" className="h-4 w-4" />
                                    <span>{app.ratingAvg}</span>
                                </span>
                            </div>
                        </div>
                     </NavLink>
                    ))}
            </div>



            <NavLink className="btn mt-8 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white" to="/apps">Show All</NavLink>

        </section >

        </>
    );
};

export default TopAppsSection;