import { useState, useEffect } from "react";
import axios from "../../services/axios";
import "./FilmRow.scss";
import { base_url } from "../../services/requests";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Spinner from "../spinner/Spinner";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const FilmRow = ({ title, fetchUrl, updateModal }) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            setLoading(false);
            return request;
        };

        fetchData();
    }, [fetchUrl]);

    const handleNavigateButton = (path, movie) => {
        console.log(`path=${path}, movie=${movie}`);
        if (window.innerWidth > 767) {
            updateModal(true, movie);
        } else {
            navigate(path, { state: movie });
        }
    };

    const renderItems = (arr) => {
        const items = arr.map((movie) => (
            <SwiperSlide key={movie.id}>
                <img
                    onClick={() => {
                        handleNavigateButton(`/movies/${movie.id}`, movie);
                    }}
                    key={movie.id}
                    className="filmrow__poster"
                    src={`${base_url}${movie.backdrop_path}`}
                    alt={movie.name}
                />
            </SwiperSlide>
        ));

        return (
            <Swiper
                breakpoints={{
                    0: {
                        width: 0,
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        width: 480,
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        width: 640,
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 10,
                    },

                    768: {
                        width: 768,
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 10,
                    },
                    992: {
                        width: 992,
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                        spaceBetween: 10,
                    },
                    1200: {
                        width: 1200,
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                        spaceBetween: 15,
                    },
                    1400: {
                        width: 1400,
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                        spaceBetween: 15,
                    },
                }}
                modules={[Navigation]}
                className="filmrow__posters"
                navigation
                allowTouchMove={true}
                loop={true}
            >
                {items}
            </Swiper>
        );
    };

    const items = renderItems(movies);
    const spinner = isLoading ? <Spinner /> : null;

    return (
        <div className="filmrow">
            <h2 className="title">{title}</h2>
            <div className="wrapper">
                {spinner}
                {items}
            </div>
        </div>
    );
};

export default FilmRow;
