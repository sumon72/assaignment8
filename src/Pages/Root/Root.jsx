import React from "react";
import { ToastContainer } from 'react-toastify';
import '../../../src/App.css'
import { Outlet } from "react-router";
import NavBar from "../../Component/NavBar/NavBar.jsx"
import Footer from "../../Component/Footer/Footer.jsx"
const Root = () => {
    return (
        <>
            <div>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
                <ToastContainer />
            </div>

        </>
    );
};

export default Root;