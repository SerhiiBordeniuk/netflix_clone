import "./MobileFilmPage.scss";

import { base_url } from "../../services/requests";

import mainlogo from "../../resources/Netflix.svg";
import forward from "../../resources/forward.png";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import React from "react";

const MobileFilmPage = () => {
    let location = useLocation();
    const film = location.state;

    return (
        <div className="mobilefilmpage">
            <div className="content">
                <div
                    className="poster__image"
                    style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${base_url}${film?.backdrop_path})`,
                        backgroundPosition: "center center",
                    }}
                ></div>
                <Link to="/" href="" className="main__logo">
                    <img className="logo_netflix" src={mainlogo} alt="logo" />
                </Link>
                <div className="film__info">
                    <div className="title__data">
                        <div className="title">
                            {film?.title || film?.name || film?.original_name}
                        </div>
                        <div className="title__details">
                            <p className="release_date">{film?.first_air_date}</p>
                            <p className="age_restriction">16+</p>
                        </div>
                    </div>
                    <div className="app_launch">
                        <h1 className="entice__launch">Watch Netflix on smartphone or tablet</h1>
                        <a className="download" href="">
                            <span className="appsotre_download">Get free app</span>
                        </a>
                        <a className="site__button" href="">
                            <img src={forward} alt="" className="arrow" />
                            <span className="button">Go to Netflix.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileFilmPage;
