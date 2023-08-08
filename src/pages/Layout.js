import React from "react";
import Header from "../components/Header/Header"
import Main from "../components/Main/Main";
import "./Layout.css"
import Footer from "../components/Footer/Footer";

function Layout()
{
    return(
        <div className="layout_container">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Layout;