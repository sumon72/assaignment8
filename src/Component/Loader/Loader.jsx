import { useState } from "react";
import logo from "../../assets/logo.png";
const Loader = () => {

    return (
        <>
            <div className="flex items-center justify-center h-64">
                <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>

        </>
    );
};

export default Loader;