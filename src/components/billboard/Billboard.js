import { useState, useEffect } from "react";
import axios from "../../services/axios";
import requests from "../../services/requests";
import { base_url } from "../../services/requests";
import "./Billboard.scss";
import details from "../../resources/Details.svg";
import play from "../../resources/Play.svg";

const Billboard = (fetchUrl) => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            );
            return request;
        };

        fetchData();
    }, []);

    return (
        <div
            className="billboard"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
                backgroundPosition: "center center",
            }}
        >
            <div className="billboard__content">
                <h1 className="billboard__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <h1 className="billboard__description">{movie?.overview}</h1>
                <div className="billboard__buttons">
                    <button className="billboard__button play">
                        <img src={play}></img>Play
                    </button>
                    <button className="billboard__button">
                        <img src={details}></img>Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Billboard;
