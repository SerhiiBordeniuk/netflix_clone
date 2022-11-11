import "./MobileFilmPage.scss";
import { base_url } from "../../services/requests";
import mainlogo from "../../resources/Netflix.svg";
import forward from "../../resources/forward.png";
import { Link } from "react-router-dom";

import React from "react";

const MobileFilmPage = (movie) => {
    return (
        <div className="mobilefilmpage">
            <div className="content">
                <div
                    className="poster__image"
                    style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/z2yahl2uefxDCl0nogcRBstwruJ.jpg)`,
                        backgroundPosition: "center center",
                    }}
                ></div>
                <Link to="/" href="" className="main__logo">
                    <img className="logo_netflix" src={mainlogo} alt="logo" />
                </Link>
                <div className="film__info">
                    <div className="title__data">
                        <div className="title">
                            {movie?.title || movie?.name || movie?.original_name}
                        </div>
                        <div className="title__details">
                            <p className="release_date">{movie?.first_air_date}</p>
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
