import React from "react";
import NotFound from "../../assets/App-Error.png"
import NavBar from "../../Component/NavBar/NavBar.jsx";
import Footer from "../../Component/Footer/Footer.jsx";
const Error = () => {
    return (
        <>
            <NavBar></NavBar>
            <div class="flex flex-col items-center justify-center min-h-screen text-center">
                <div class="mx-auto">
                    <img src={NotFound} alt="Error Icon" class="mx-auto h-full w-full mb-4" />

                    <h1 class="text-4xl font-bold text-gray-800 mb-2">OPPS!! APP NOT FOUND!</h1>

                    <p class="text-gray-600 text-lg">The App you are requesting is not found on our system.  please try another apps.</p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Error;