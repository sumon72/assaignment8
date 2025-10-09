import React from "react";
import ErrorIcon from "../../assets/error-404.png"

const Error = () => {
    return (
        <>
            <div class="flex flex-col items-center justify-center min-h-screen text-center">
                <div class="mx-auto">
                    <img src={ErrorIcon} alt="Error Icon" class="mx-auto h-full w-full mb-4" />

                    <h1 class="text-4xl font-bold text-gray-800 mb-2">Oops, page not found!</h1>

                    <p class="text-gray-600 text-lg">The page you are looking for is not available.</p>
                </div>
            </div>

        </>
    );
};

export default Error;