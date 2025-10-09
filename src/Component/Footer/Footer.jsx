import { useState } from "react";
import logo from "../../assets/logo.png";
const Footer = () => {

    return (
        <>
            <footer className="bg-[#000000] text-[#FFFFFF]">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between">


                        <div className="flex items-center gap-2 flex-shrink-0">
                            <img src={logo} alt="Logo" width={40} height={40} />
                            <a className="text-xl font-semibold tracking-wide">HERO.IO</a>
                        </div>


                        <div>
                            <h3 className="text-white font-semibold tracking-wider">Social Links</h3>
                            <div className="flex mt-4">
                                <ul className="flex items-center space-x-4">
                                    <li className="list-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="2" y1="12" x2="22" y2="12"></line>
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                        </svg>
                                    </li>

                                    <li className="list-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                    </li>

                                    <li className="list-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-12 pt-8 border-t border-gray-700 text-center">
                        <p className="text-sm">
                            © {new Date().getFullYear()} HERO.IO. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>



        </>
    );
};

export default Footer;