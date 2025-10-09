import React from "react";
// import { ChevronDown } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import AppsData from '../../AppsData.json';
import Rating_Icon from "../../assets/icon-ratings.png";
const Apps = () => {

    return (
        <>
            <section className="py-16 px-4 bg-base-100 text-center">
                <h2 className="text-3xl font-bold">Your Installed Apps</h2>
                <p className="text-gray-500 mt-2">
                    Explore All Trending Apps on the Market developed by us
                </p>

                <div className="max-w-6xl mx-auto flex justify-between mt-10">
                    <div>
                        <span>(4)</span><span> Apps Found</span>
                    </div>

                    {/* Dropdown */}
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn m-1">Sort By Size ⬇️</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Low-High</a></li>
                            <li><a>Low-High</a></li>
                        </ul>
                    </div>

                </div>

                <div className="space-y-4 mt-5 max-w-6xl mx-auto">
                    {AppsData.map((app, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between bg-base-200 shadow-md p-4 rounded-xl hover:shadow-lg transition"
                        >
                            {/* Left: Image */}
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Middle: Title + Rating */}
                                <div>
                                    <h3 className="font-medium text-base">{app.title}</h3>
                                    <div className="flex items-center mt-1 text-sm space-x-3">
                                        <span className="text-[#00D390] flex items-center">
                                            <FontAwesomeIcon icon={faDownload} className="mr-1" /> {app.downloads}M
                                        </span>
                                        <span className="flex items-center space-x-1 bg-[#FFF0E1] px-2 py-1 rounded-full text-[#FF8811]">
                                            <img src={Rating_Icon} alt="Rating Icon" className="h-3 w-3" />
                                            <span>{app.ratingAvg}</span>

                                        </span>
                                        <span className="text-[#627382]">{app.size} MB</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Uninstall Button */}
                            <button className="px-4 py-2 rounded-sm text-white font-medium bg-[#00D390] hover:opacity-90 transition">
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>


            </section>

        </>
    );
};

export default Apps;