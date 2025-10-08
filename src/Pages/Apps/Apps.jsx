import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import AppsData from '../../AppsData.json';
const Apps = () => {

    return (
        <>
            <section className="py-16 px-4 bg-base-100 text-center">
                <h2 className="text-3xl font-bold">Our All Applications</h2>
                <p className="text-gray-500 mt-2">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
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
                                <span className="text-success">⬇ 9M</span>
                                <span className="text-warning">⭐ 5</span>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

        </>
    );
};

export default Apps;