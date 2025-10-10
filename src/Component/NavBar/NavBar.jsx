import { useState } from "react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from "../../assets/logo.png";
const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="navbar bg-white shadow-sm px-6 flex justify-between items-center">
                {/* Left - Logo + Text */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <NavLink to="/">
                        <img src={logo} alt="Logo" width={40} height={40} />
                    </NavLink>
                    <NavLink className="text-xl font-semibold tracking-wide" to="/">HERO.IO</NavLink>
                </div>

                {/* Center - Menu */}
                <div className="hidden lg:flex gap-8 justify-center flex-1">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `cursor-pointer transition-colors ${isActive ? "text-[#632EE3] font-semibold" : "hover:text-[#632EE3]"}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/apps"
                        className={({ isActive }) =>
                            `cursor-pointer transition-colors ${isActive ? "text-[#632EE3] font-semibold" : "hover:text-[#632EE3]"}`
                        }
                    >
                        Apps
                    </NavLink>
                    <NavLink
                        to="/installation"
                        className={({ isActive }) =>
                            `cursor-pointer transition-colors ${isActive ? "text-[#632EE3] font-semibold" : "hover:text-[#632EE3]"}`
                        }
                    >
                        Installation
                    </NavLink>
                </div>

                {/* Right - Button */}
                <div className="hidden lg:flex items-center">
                    <a
                        href="https://github.com/sumon72"
                        className="btn btn-sm text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-sm"
                    >
                        <FontAwesomeIcon icon={faGithub} /> Contribute
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        className="btn btn-ghost btn-circle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-16 right-4 bg-white shadow-md rounded-xl p-4 flex flex-col gap-3 lg:hidden w-48 z-50">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `cursor-pointer transition-colors ${isActive ? "text-[#632EE3] font-semibold" : "hover:text-[#632EE3]"}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/apps"
                            className={({ isActive }) =>
                                `cursor-pointer transition-colors ${isActive ? "text-[#632EE3] font-semibold" : "hover:text-[#632EE3]"}`
                            }
                        >
                            Apps
                        </NavLink>
                        <NavLink
                            to="/installation"
                            className={({ isActive }) =>
                                `cursor-pointer transition-colors ${isActive ? "text-[#632EE3] font-semibold" : "hover:text-[#632EE3]"}`
                            }
                        >
                            Installation
                        </NavLink>
                        <a
                            href="https://github.com/sumon72"
                            className="btn btn-sm mt-2 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-sm"
                        >
                            <FontAwesomeIcon icon={faGithub} /> Contribute
                        </a>
                    </div>
                )}
            </div>


        </>
    );
};

export default NavBar;