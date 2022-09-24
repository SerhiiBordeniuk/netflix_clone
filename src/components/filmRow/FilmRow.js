import { useState, useEffect } from "react";
import axios from "../../services/axios";
import "./FilmRow.scss";
import { base_url } from "../../services/requests";

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

    return (
        <div className="filmrow">
            <h2 className="title">{title}</h2>

            <div className="filmrow__posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className="filmrow__poster"
                        width="285px"
                        height="171px"
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default FilmRow;
