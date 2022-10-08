import React from "react";
import { base_url } from "../../services/requests";
import "./Modal.scss";
import play from "../../resources/Play.svg";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ active, setctive }) => {
    return (
        <div className="modal">
            <div className="modal__inner">
                <div
                    className="modal__poster"
                    style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(https://image.tmdb.org/t/p/original///zymbuoBoL1i94xAOzVJF6IuWLfD.jpg)`,
                        backgroundPosition: "center center",
                    }}
                >
                    <div className="modal__content">
                        <div className="close_button">
                            <CloseIcon />
                        </div>
                        <div className="wrapper">
                            <h1 className="modal__title">Ingloryas bastards</h1>
                            <div className="modal__buttons">
                                <button className="modal__button play">
                                    <img src={play}></img>Play
                                </button>
                                <button className="modal__button add">
                                    <AddIcon />
                                </button>
                                <button className="modal__button like">
                                    <ThumbUpIcon />
                                </button>
                            </div>
                            <div className="modal__details">
                                <div className="details__left">
                                    <div className="left_top">
                                        <p className="coincidence">Coincidence: 95%</p>
                                        <p className="release_date">2020</p>
                                        <p className="age_restriction">16+</p>
                                    </div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Pariatur, sint odio. Ab vitae ipsam voluptate eius, maxime
                                        necessitatibus veniam quidem sit, est illum quibusdam ipsa,
                                        aliquam unde nostrum? Accusamus, optio?
                                    </div>
                                </div>
                                <div className="details__right">
                                    <div className="genres">
                                        <span>Genres: </span>
                                        Thriller, Fantasy
                                    </div>
                                    <div className="origin_country">
                                        <span>Country of origin: </span>
                                        US
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
