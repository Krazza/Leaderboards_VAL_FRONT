import React from "react";
import { Outlet } from "react-router-dom";
import "./Main.css";

function Main() {
    return(
        <div className="main_wrap">
            <Outlet/>
        </div>
    )
}

export default Main;