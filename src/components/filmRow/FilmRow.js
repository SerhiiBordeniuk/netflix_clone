import { useState, useEffect } from "react";
import axios from "../../services/axios";
import "./FilmRow.scss";

const base_url = "https://image.tmdb.org/t/p/original/";

const FilmRow = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        };

        fetchData();
    }, [fetchUrl]);

    console.log(movies);
    return (
        <div className="filmrow">
            <h2>{title}</h2>
            <div className="filmrow__posters">
                {movies.map((movie) => (
                    <img
                        className="filmrow__poster"
                        width="243px"
                        height="137px"
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default FilmRow;
