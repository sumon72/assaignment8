import { useState, useEffect } from "react";
// import { ChevronDown } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import AppsData from '../../AppsData.json';
import Rating_Icon from "../../assets/icon-ratings.png";
import { toast } from 'react-toastify';
import Loader from "../../Component/Loader/Loader.jsx"
const Apps = () => {

    const installedApps = JSON.parse(localStorage.getItem("InstalledApps")) || [];
    const [InstalledAppsArray, setInstalledAppsArray] = useState(installedApps);


    const UnInstallApp = (id) => {

        const installedApps = JSON.parse(localStorage.getItem("InstalledApps")) || [];
        const updatedApps = installedApps.filter(app => app.id !== id);
        localStorage.setItem("InstalledApps", JSON.stringify(updatedApps));
        const UpdateinstalledApps = JSON.parse(localStorage.getItem("InstalledApps")) || [];
        setInstalledAppsArray(UpdateinstalledApps);
        toast("Apps UnInstalled Successfully.");


    }

    const [dropdownLabel, setDropdownLabel] = useState("Sort By Size ⬇️");
    const handleSort = (order) => {
        const sortedApps = [...InstalledAppsArray].sort((a, b) => {
            if (order === "asc") return a.size - b.size;
            else return b.size - a.size;
        });

        setDropdownLabel(order === "asc" ? "Size: Low-High ⬇️" : "Size: High-Low ⬇️");
        setInstalledAppsArray(sortedApps);
    };

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    if (loading) return <Loader />;


    return (
        <>
            <section className="py-16 px-4 bg-base-100 text-center">
                <h2 className="text-3xl font-bold">Your Installed Apps</h2>
                <p className="text-gray-500 mt-2">
                    Explore All Trending Apps on the Market developed by us
                </p>

                <div className="max-w-6xl mx-auto flex justify-between mt-10">
                    <div>
                        <span>({InstalledAppsArray.length})</span><span> Apps Found</span>
                    </div>

                    {/* Sorting */}
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn m-1">{dropdownLabel}</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li>
                                <a onClick={() => handleSort("asc")}>Low-High</a>
                            </li>
                            <li>
                                <a onClick={() => handleSort("desc")}>High-Low</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="space-y-4 mt-5 max-w-6xl mx-auto">
                    {InstalledAppsArray.map((app, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between bg-base-200 shadow-md p-4 rounded-xl hover:shadow-lg transition"
                        >

                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>


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


                            <button onClick={() => UnInstallApp(app.id)} className="px-4 py-2 rounded-sm text-white font-medium bg-[#00D390] hover:opacity-90 transition">
                                Uninstall
                            </button>
                        </div>
                    ))}

                    {InstalledAppsArray.length === 0 && (
                        <p className="col-span-full text-gray-500 text-5xl mt-6">
                            No Apps Installed.
                        </p>
                    )}
                </div>


            </section>

        </>
    );
};

export default Apps;