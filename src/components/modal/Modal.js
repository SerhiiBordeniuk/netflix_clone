import React from "react";
import { base_url } from "../../services/requests";
import "./Modal.scss";
import play from "../../resources/Play.svg";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ active, setActive, movie }) => {
    return (
        <div className={`modal ${active ? "active" : ""}`} onClick={() => setActive(false)}>
            <div className="modal__inner" onClick={(e) => e.stopPropagation()}>
                <div
                    className="modal__poster"
                    style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
                        backgroundPosition: "center center",
                    }}
                >
                    <div className="modal__content">
                        <div className="close_button">
                            <button className="close" onClick={() => setActive(false)}>
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="wrapper">
                            <h1 className="modal__title">
                                {movie?.title || movie?.name || movie?.original_name}
                            </h1>
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
                                        <p className="release_date">{movie.first_air_date}</p>
                                        <p className="age_restriction">16+</p>
                                    </div>
                                    <div className="description">{movie.overview}</div>
                                </div>
                                <div className="details__right">
                                    <div className="genres">
                                        <span>Genres: </span>
                                        Thriller, Fantasy
                                    </div>
                                    <div className="origin_country">
                                        <span>Country of origin: {movie.origin_country} </span>
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
