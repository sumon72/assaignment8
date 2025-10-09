import { useState } from "react";
import TimeIcon from "../../assets/TimeIcon.png";
import downloadicon from "../../assets/icon-downloads.png";
import rattingicon from "../../assets/icon-ratings.png";
import reviewicon from "../../assets/icon-review.png";
import { NavLink } from "react-router";
import AppsData from '../../AppsData.json';

const AppDetails = () => {

    return (
        <>
            <div className="mx-auto">
                <div className="max-w-5xl mx-auto mt-10 p-6">
                    <div className="flex items-center space-x-6">
                        <div className="w-36 h-36 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <img
                                src={TimeIcon}
                                alt="TimeIcon"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">SmPlan: ToDo List With Reminder</h2>
                            <p className="text-sm text-gray-500">
                                Developed by <a href="#" className="text-indigo-500">productive.io</a>
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
                                    <div className="text-[#001931] text-2xl font-bold">8M</div>

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
                                    <div className="text-[#001931] text-2xl font-bold">4.9</div>

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
                                    <div className="text-[#001931] text-2xl font-bold">54K</div>

                                </div>
                            </div>

                            <button className="btn btn-success mt-5 px-6">Install Now (291 MB)</button>
                        </div>
                    </div>

                    {/* Ratings */}
                    <section className="mt-10">
                        <h3 className="text-lg font-semibold mb-4">Ratings</h3>
                        <div className="space-y-2">
                            {[
                                { stars: "5 star", width: "w-[95%]" },
                                { stars: "4 star", width: "w-[65%]" },
                                { stars: "3 star", width: "w-[40%]" },
                                { stars: "2 star", width: "w-[20%]" },
                                { stars: "1 star", width: "w-[10%]" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <span className="w-10 text-sm">{item.stars}</span>
                                    <div className="h-3 bg-orange-500 rounded-lg" style={{ width: item.width }}></div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Description */}
                    <section className="mt-10">
                        <h3 className="text-lg font-semibold mb-3">Description</h3>
                        <p className="text-sm leading-relaxed text-gray-700 mb-3">
                            This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles.
                            Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions
                            and maximizing concentration. Users can create custom work and break intervals, track how many sessions
                            they complete each day, and review detailed statistics about their focus habits over time.
                            The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand.
                        </p>

                        <p className="text-sm leading-relaxed text-gray-700 mb-3">
                            A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific
                            Pomodoro session, making your schedule more structured. The built-in analytics not only show how much time
                            you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency
                            and adjust your workflow accordingly. The app also includes optional background sounds such as white noise,
                            nature sounds, or instrumental music to create a distraction-free atmosphere.
                        </p>

                        <p className="text-sm leading-relaxed text-gray-700">
                            For people who struggle with procrastination, the app provides motivational streaks and achievements.
                            Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment.
                            This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying,
                            writing, or working, this app adapts to your routine, ensuring you work not just harder but smarter.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default AppDetails;