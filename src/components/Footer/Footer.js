import React from "react";
import "./Footer.css";

function Footer() {
    return(
        <footer className="footer">
            <div className="footer_content">
            <hr className="footer-divider"/>
                <div className="footer_box">
                    <a href="https://playvalorant.com/en-gb/" target="_blank" rel="noopener noreferrer">{"VALORANT"}</a>
                    <a href="https://symphonious-squirrel-2e92aa.netlify.app/" target="_blank" rel="noopener noreferrer">{"WEBSITE"}</a>
                    <p>{"CREATED BY"} <span className="author">{"VLADISLAV MUONDO / RapperBugZapper#NEON"}</span></p>
                    <a href="https://github.com/Krazza" target="_blank" rel="noopener noreferrer">{"GITHUB"}</a>
                    <a href="https://www.linkedin.com/in/vladislav-muondo-87021a194/" target="_blank" rel="noopener noreferrer">{"LINKEDIN"}</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;