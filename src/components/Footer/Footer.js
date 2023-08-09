import React from "react";
import "./Footer.css";

function Footer() {
    return(
        <footer className="footer">
            <div className="footer_content">
            <hr class="footer-divider"/>
                <div className="footer_box">
                    <p>{"VALORANT"}</p>
                    <p>{"WEBSITE"}</p>
                    <p>{"CREATED BY"} <span className="author">{"RapperBugZapper#NEON"}</span></p>
                    <p>{"GITHUB"}</p>
                    <p>{"LINKEDIN"}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;