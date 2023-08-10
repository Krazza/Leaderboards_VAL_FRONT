import React from "react";
import Header from "../components/Header/Header"
import Main from "../components/Main/Main";
import "./Layout.css"
import Footer from "../components/Footer/Footer";
import Wave from "../components/Wave/Wave";

function Layout()
{
    return(
        <div className="layout_container">
            <Header/>
            <Wave/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Layout;