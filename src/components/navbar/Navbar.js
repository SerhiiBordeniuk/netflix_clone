import "./Navbar.scss";
import search from "../../resources/Search.svg";
import mainlogo from "../../resources/Netflix.svg";
import bell from "../../resources/Notification.svg";
import profile from "../../resources/profile.png";
import downarrow from "../../resources/DownArrow.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(true);
    const [isActive, setActive] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="navbar__left">
                    <div
                        className={isActive ? "navbar__burger active" : "navbar__burger"}
                        onClick={toggleClass}
                    >
                        <span></span>
                    </div>
                    <Link to="/">
                        <img className="main_logo" src={mainlogo} alt="main logo" />
                    </Link>
                    <div className={isActive ? "navbar__menu active" : "navbar__menu"}>
                        <a className="navigation_tab">Home</a>
                        <a className="navigation_tab">Series</a>
                        <a className="navigation_tab">Movies</a>
                        <a className="navigation_tab">New and popular</a>
                        <a className="navigation_tab">My list</a>
                    </div>
                </div>
                <div className="navbar__right">
                    <div className="nav_element">
                        <div className="search_box">
                            <button className="search_tab">
                                <img src={search} alt="search icon" />
                            </button>
                        </div>
                    </div>
                    <div className="nav_element">
                        <button className="notification_menu">
                            <img src={bell} alt="notification button" />
                        </button>
                    </div>
                    <div className="nav_element">
                        <div className="profile_menu" /* "active_profile_menu" */>
                            <div className="dropdown_button">
                                <img className="avatar" src={profile} alt="profile" />
                                <span className="downarrow">
                                    <img src={downarrow} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
