import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
    const { active } = props;

    return (
        <React.Fragment>
            <div className="nav-container">
                <nav className="navbar">
                    <div className="nav-background">
                        <ul className="nav-list">
                            <li
                                className={
                                    active === "projects"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link to="/projects">Project Übermensch</Link>
                            </li>
                            <li
                                className={
                                    active === "articles"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link to="/articles">Articles</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default NavBar;
