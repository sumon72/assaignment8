import { useState, useEffect } from "react";
import downloadicon from "../../assets/icon-downloads.png";
import rattingicon from "../../assets/icon-ratings.png";
import reviewicon from "../../assets/icon-review.png";
import { NavLink, useParams } from "react-router";
import AppsData from '../../AppsData.json';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    LabelList
} from "recharts";

const AppDetails = () => {
    const { id } = useParams();

    const [getAppDetails, setAppDetails] = useState(AppsData.find((item) => item.id === Number(id)));


    return (
        <>
            <div className="mx-auto">
                <div className="max-w-5xl mx-auto mt-10 p-6">
                    <div className="flex items-center space-x-6">
                        <div className="w-36 h-36 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <img
                                src={getAppDetails.image}
                                alt="TimeIcon"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">{getAppDetails.title}</h2>
                            <p className="text-sm text-gray-500">
                                Developed by <a href="#" className="text-indigo-500">{getAppDetails.companyName}</a>
                            </p>


                            <div className="flex space-x-10 mt-4">
                                <div>
                                    <span className="text-[#00D390] flex items-center">
                                        <img
                                            src={downloadicon}
                                            alt="downloadicon"
                                            className="w-5 h-5"
                                        />
                                    </span>
                                    <div className="text-xs">Downloads</div>
                                    <div className="text-[#001931] text-2xl font-bold">{getAppDetails.downloads}M</div>

                                </div>
                                <div>
                                    <span className="text-[#00D390] flex items-center">
                                        <img
                                            src={rattingicon}
                                            alt="rattingicon"
                                            className="w-5 h-5"
                                        />
                                    </span>
                                    <div className="text-xs">Average Ratings</div>
                                    <div className="text-[#001931] text-2xl font-bold">{getAppDetails.ratingAvg}</div>

                                </div>
                                <div>
                                    <span className="text-[#00D390] flex items-center">
                                        <img
                                            src={reviewicon}
                                            alt="reviewicon"
                                            className="w-5 h-5"
                                        />
                                    </span>
                                    <div className="text-xs">Total Reviews</div>
                                    <div className="text-[#001931] text-2xl font-bold">{getAppDetails.reviews}K</div>

                                </div>
                            </div>

                            <button className="btn btn-success mt-5 px-6">Install Now ({getAppDetails.size} MB)</button>
                        </div>
                    </div>

                    {/* Ratings */}
                    <section className="mt-10">
                        <h3 className="text-lg font-semibold mb-4">Ratings</h3>
                        <div className="w-full h-60">
                            <ResponsiveContainer>
                                <BarChart
                                    layout="vertical"
                                    data={getAppDetails.ratings}  
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis type="number" />
                                    <YAxis type="category" dataKey="name" />
                                    <Tooltip />
                                    <Bar dataKey="count" fill="#FF8811">
                                        <LabelList dataKey="count" position="right" />
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </section>

                    {/* Description */}
                    <section className="mt-10">
                        <h3 className="text-lg font-semibold mb-3">Description</h3>
                        <p className="text-sm leading-relaxed text-gray-700 mb-3">
                            {getAppDetails.description}
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default AppDetails;