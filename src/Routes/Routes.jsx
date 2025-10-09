import React, { Component } from 'react'
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root.jsx";
import ErrorPage from "../Pages/Error/ErrorPage.jsx";
import Home from "../Pages/Home/Home.jsx";
import Apps from "../Pages/Apps/Apps.jsx";
import Installation from "../Pages/Installation/Installation.jsx";
import AppDetails from "../Pages/AppDetails/AppDetails.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [{
            index: true,
            path: "/",
            Component: Home
        },
        { path: "/apps", Component: Apps },
        { path: "/installation", Component: Installation },
        {
            path: "AppDetails",
            children: [
                { path: ":id", Component: AppDetails },

            ],
        },

        ]
    },
]);
