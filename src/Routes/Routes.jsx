import React, { Component } from 'react'
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root.jsx";
import ErrorPage from "../Pages/Error/ErrorPage.jsx";
import Home from "../Pages/Home/Home.jsx";

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
        { path: "/apps", element: <h3>apss</h3> },

        ]
    },
]);
